'use server'

import prisma from '@/lib/prisma'
import { z } from 'zod'
import type { ProjectFormData, ProjectActionResponse } from '@/types/project'

const projectSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	description: z.string().min(1, 'Description is required'),
	startDate: z.iso.datetime({ message: 'Invalid start date' }),
	deliveryDate: z.iso.datetime({ message: 'Invalid delivery date' }),
	status: z.enum(['not-started', 'on-track', 'off-track', 'on-hold', 'completed']),
})

export async function createProject(
	prevState: ProjectActionResponse | null,
	formData: FormData,
): Promise<ProjectActionResponse> {
	const rowFormData = {
		name: formData.get('name') as string,
		description: formData.get('description') as string,
		startDate: new Date(formData.get('startDate') as string).toISOString(),
		deliveryDate: new Date(formData.get('deliveryDate') as string).toISOString(),
		status: formData.get('status') as string,
	}

	console.log('rowFormData', rowFormData)

	const parseResult = projectSchema.safeParse(rowFormData)

	console.log('cleanFormData', parseResult)

	const data = parseResult.data

	if (!parseResult.success) {
		return {
			success: false,
			message: 'Please fix the form errors',
			errors: z.flattenError(parseResult.error),
		}
	}

	if (data) {
		try {
			await prisma.project.create({
				data: {
					name: data.name,
					description: data.description,
					startDate: data.startDate,
					deliveryDate: data.deliveryDate,
					status: data.status,
				},
			})
		} catch (error) {
			console.error('Database error:', error)
			return {
				success: false,
				message: 'Failed to create project in the database',
			}
		}
	}

	return {
		success: true,
		message: 'Project created successfully',
	}
}
