'use server'

import prisma from '@/lib/prisma'
import { z } from 'zod'
import { projectSchema } from '@/types/projectSchema'
import type { ProjectActionResponse } from '@/types/projectSchema'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createProject(
	prevState: ProjectActionResponse | null,
	formData: FormData,
): Promise<ProjectActionResponse> {
	const rawFormData = {
		name: formData.get('name') as string,
		description: formData.get('description') as string,
		startDate: new Date(formData.get('startDate') as string).toISOString(),
		deliveryDate: new Date(formData.get('deliveryDate') as string).toISOString(),
		status: formData.get('status') as string,
	}

	const parsedProduct = projectSchema.safeParse(rawFormData)

	const product = parsedProduct.data

	if (!parsedProduct.success) {
		return {
			success: false,
			message: 'Please fix the form errors',
			errors: z.flattenError(parsedProduct.error),
		}
	}

	if (product) {
		try {
			await prisma.project.create({
				data: {
					name: product.name,
					description: product.description,
					startDate: product.startDate,
					deliveryDate: product.deliveryDate,
					status: product.status,
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

	revalidatePath('/dashboard/projects')
	redirect('/dashboard/projects')
}
