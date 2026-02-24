import { z } from 'zod'

const ProjectStatus = z.enum(['NOT_STARTED', 'ON_TRACK', 'OFF_TRACK', 'ON_HOLD', 'COMPLETED'])

export const ProjectSchema = z.object({
	id: z.string(),
	name: z.string().min(1, 'Name is required'),
	description: z.string().nullable(),
	startDate: z.coerce.date({ error: 'Start date is required' }),
	deliveryDate: z.coerce.date({ error: 'Delivery date is required' }),
	status: ProjectStatus,
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
	active: z.boolean(),
})

export type Project = z.infer<typeof ProjectSchema>

export const CreateProjectSchema = ProjectSchema.omit({ id: true, createdAt: true, updatedAt: true, active: true })

type CreateProjectFormData = z.infer<typeof CreateProjectSchema>

export interface CreateProjectActionResponse {
	success: boolean
	message: string
	errors?: {
		formErrors: string[]
		fieldErrors: {
			[K in keyof CreateProjectFormData]?: string[]
		}
	}
}
