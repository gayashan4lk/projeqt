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
import { CreateProjectSchema } from '@/types/projectSchema'
import { Input } from '@/components/ui/input'

const initialState: CreateProjectActionResponse = {
	success: false,
	message: '',
}

export default function ProjectCreateFormShadcnTanstack() {
	const [state, action, isPending] = useActionState(createProject, initialState)

	const fieldErrors = state?.errors?.fieldErrors || {}

	const form = useForm({
		validators: {
			onSubmit: CreateProjectSchema,
			onChange: CreateProjectSchema,
			onBlur: CreateProjectSchema,
		},
		onSubmit: () => {
			console.log('form submitted')
		},
	})

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
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
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value as string}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="My awesome project"
											autoComplete="off"
										/>
										<FieldDescription>
											This is the project name. Enter an unique name for the
											project. Must be less than 30 characters.
										</FieldDescription>
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
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value as string}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="This project is about ..."
											autoComplete="off"
										/>
										<FieldDescription>
											Enter a description for the project.
										</FieldDescription>
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
						<Field>
							<FieldLabel htmlFor="startDate">Start Date</FieldLabel>
							<input
								id="startDate"
								type="date"
								name="startDate"
								placeholder="Start Date"
								className="block w-full rounded-md border-2 border-slate-300 p-2"
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="deliveryDate">Delivery Date</FieldLabel>
							<input
								id="deliveryDate"
								type="date"
								name="deliveryDate"
								placeholder="Delivery Date"
								className="block w-full rounded-md border-2 border-slate-300 p-2"
							/>
						</Field>
					</FieldGroup>
				</FieldSet>
				<FieldSeparator />
				<FieldSet>
					<FieldLegend>Project Status</FieldLegend>
					<FieldDescription>Select the status of the project</FieldDescription>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="status">Status</FieldLabel>
							<Select defaultValue="">
								<SelectTrigger id="status">
									<SelectValue placeholder="Select Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="NOT_STARTED">Not Started</SelectItem>
										<SelectItem value="ON_TRACK">On Track</SelectItem>
										<SelectItem value="OFF_TRACK">Off Track</SelectItem>
										<SelectItem value="ON_HOLD">On Hold</SelectItem>
										<SelectItem value="COMPLETED">Completed</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</Field>
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
