import { z } from 'zod'

export const projectSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	description: z.string().min(1, 'Description is required'),
	startDate: z.iso.datetime({ message: 'Invalid start date' }),
	deliveryDate: z.iso.datetime({ message: 'Invalid delivery date' }),
	status: z.enum(['not-started', 'on-track', 'off-track', 'on-hold', 'completed']),
})

type ProjectFormData = z.infer<typeof projectSchema>

export interface ProjectActionResponse {
	success: boolean
	message: string
	errors?: {
		formErrors: string[]
		fieldErrors: {
			[K in keyof ProjectFormData]?: string[]
		}
	}
}
