export interface ProjectFormData {
	name: string
	description: string
	startDate: Date
	deliveryDate: Date
	status: string
}

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
