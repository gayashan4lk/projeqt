'use server'

import prisma from '@/lib/prisma'
import { z } from 'zod'
import { CreateProjectSchema } from '@/types/projectSchema'
import type { CreateProjectActionResponse } from '@/types/projectSchema'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createProject(
	prevState: CreateProjectActionResponse | null,
	formData: FormData,
): Promise<CreateProjectActionResponse> {
	const { data, success, error } = CreateProjectSchema.safeParse(
		Object.fromEntries(formData.entries()),
	)

	if (!success) {
		return {
			success: false,
			message: 'Please fix the form errors',
			errors: z.flattenError(error),
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

	revalidatePath('/dashboard/projects')
	redirect('/dashboard/projects')
}

export async function updateProject(
	id: string,
	prevState: any | null,
	formData: FormData,
): Promise<CreateProjectActionResponse> {
	const { data, success, error } = CreateProjectSchema.safeParse(
		Object.fromEntries(formData.entries()),
	)

	if (!success) {
		return {
			success: false,
			message: 'Please fix the form errors',
			errors: z.flattenError(error),
		}
	}

	if (data) {
		try {
			await prisma.project.update({
				where: {
					id: id,
				},
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

	revalidatePath(`/dashboard/projects/${id}`)
	redirect(`/dashboard/projects/${id}`)
}

export async function deleteProject(id: string) {
	try {
		await prisma.project.delete({
			where: {
				id: id,
			},
		})
	} catch (error) {
		console.error('Database error:', error)
	}

	revalidatePath('/dashboard/projects')
	redirect('/dashboard/projects')
}
