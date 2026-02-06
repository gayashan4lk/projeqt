'use server'
import prisma from '@/lib/prisma'

export async function createProject(prevState: number, data: FormData) {
	console.log('prevState', prevState)
	console.log('form-data', data)

	const rowFormData = {
		name: data.get('name') as string,
		description: data.get('description') as string,
		startDate: new Date(data.get('startDate') as string),
		deliveryDate: new Date(data.get('deliveryDate') as string),
		status: data.get('status') as string,
	}
	console.log('rowFormData', rowFormData)

	await prisma.project.create({
		data: rowFormData,
	})

	return prevState + 1
}
