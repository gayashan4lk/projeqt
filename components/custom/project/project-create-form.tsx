'use client'

import { createProject } from '@/actions/projectAction'
import { Button } from '@/components/ui/button'
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
} from '@/components/ui/field'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { CreateProjectActionResponse } from '@/types/projectSchema'
import { useActionState } from 'react'
import { useForm } from '@tanstack/react-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import z from 'zod'
import DatePickerInput from '../date-picker-input'

const initialState: CreateProjectActionResponse = {
	success: false,
	message: '',
}

const CreateProjectFormSchema = z.object({
	name: z
		.string()
		.min(1, 'Name cannot be empty')
		.max(30, 'Name must be less than 30 characters'),
	description: z.string(),
	status: z.enum([
		'NOT_STARTED',
		'ON_TRACK',
		'OFF_TRACK',
		'ON_HOLD',
		'COMPLETED',
	]),
	startDate: z.any(),
	deliveryDate: z.any(),
})

export default function ProjectCreateForm() {
	const [state, action, isPending] = useActionState(createProject, initialState)

	const fieldErrors = state?.errors?.fieldErrors || {}

	const myDefaultValues = {
		name: '',
		description: '',
		status: 'NOT_STARTED',
		startDate: '',
		deliveryDate: '',
	}

	const form = useForm({
		defaultValues: myDefaultValues,
		validators: {
			onSubmit: CreateProjectFormSchema,
			onChange: CreateProjectFormSchema,
		},
	})

	return (
		<form
			action={action}
			onSubmit={() => {
				form.handleSubmit()
			}}
			className="w-96"
		>
			<FieldGroup>
				<FieldSet>
					<FieldLegend>Overview</FieldLegend>
					<FieldDescription>
						Enter project name and description
					</FieldDescription>
					<FieldGroup>
						<form.Field
							name="name"
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid

								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>Name</FieldLabel>
										<FieldDescription>
											This is the project name. Enter an unique name for the
											project. Must be less than 30 characters.
										</FieldDescription>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value as string}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="My awesome project"
										/>

										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								)
							}}
						/>
						<form.Field
							name="description"
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid

								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>Description</FieldLabel>
										<FieldDescription>Describe your project.</FieldDescription>
										<Textarea
											id={field.name}
											name={field.name}
											value={field.state.value as string}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="This project is about ..."
											className="min-h-[120px]"
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								)
							}}
						/>
					</FieldGroup>
				</FieldSet>

				<FieldSeparator />

				<FieldSet>
					<FieldLegend>Timeline</FieldLegend>
					<FieldDescription>
						Enter start date and delivery date
					</FieldDescription>
					<FieldGroup>
						<form.Field
							name="startDate"
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid

								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>Start Date</FieldLabel>
										<FieldDescription>
											Enter the start date of your project
										</FieldDescription>
										<DatePickerInput field={field} />
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								)
							}}
						/>
						<form.Field
							name="deliveryDate"
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid

								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>Delivery Date</FieldLabel>
										<FieldDescription>
											Enter the delivery date of your project
										</FieldDescription>
										<DatePickerInput field={field} />
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								)
							}}
						/>
					</FieldGroup>
				</FieldSet>
				<FieldSeparator />
				<FieldSet>
					<FieldLegend>Project Status</FieldLegend>
					<FieldDescription>Select the status of the project</FieldDescription>
					<FieldGroup>
						<form.Field
							name="status"
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid

								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>Status</FieldLabel>
										<Select
											defaultValue="NOT_STARTED"
											name={field.name}
											value={field.state.value}
											onValueChange={field.handleChange}
										>
											<SelectTrigger id={field.name} aria-invalid={isInvalid}>
												<SelectValue placeholder="Select Status" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="NOT_STARTED">
														Not Started
													</SelectItem>
													<SelectItem value="ON_TRACK">On Track</SelectItem>
													<SelectItem value="OFF_TRACK">Off Track</SelectItem>
													<SelectItem value="ON_HOLD">On Hold</SelectItem>
													<SelectItem value="COMPLETED">Completed</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</Field>
								)
							}}
						/>
					</FieldGroup>
				</FieldSet>
				<Field orientation="horizontal">
					<Button type="submit" className="cursor-pointer" disabled={isPending}>
						{isPending ? 'Loading' : 'Submit'}
					</Button>
				</Field>
			</FieldGroup>
		</form>
	)
}
