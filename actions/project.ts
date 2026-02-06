'use server'

import prisma from '@/lib/prisma'
import { z } from 'zod'
import type { ProjectFormData, ProjectActionResponse } from '@/types/project'

// export async function createProject(prevState: number, data: FormData) {
// 	console.log('prevState', prevState)
// 	console.log('form-data', data)

// 	const rowFormData = {
// 		name: data.get('name') as string,
// 		description: data.get('description') as string,
// 		startDate: new Date(data.get('startDate') as string),
// 		deliveryDate: new Date(data.get('deliveryDate') as string),
// 		status: data.get('status') as string,
// 	}
// 	console.log('rowFormData', rowFormData)

// 	await prisma.project.create({
// 		data: rowFormData,
// 	})

// 	return prevState + 1
// }

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
