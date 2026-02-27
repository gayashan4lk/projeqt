'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from '@/components/ui/field'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

function formatDate(date: Date | undefined) {
	if (!date) {
		return ''
	}

	return date.toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	})
}

function isValidDate(date: Date | undefined) {
	if (!date) {
		return false
	}
	return !isNaN(date.getTime())
}

type Props = {
	isInvalid: boolean
	field: any
	fieldLabel: string
	fieldDescription: string
}

export function DatePickerInputTemp({
	isInvalid,
	field,
	fieldLabel,
	fieldDescription,
}: Props) {
	const [open, setOpen] = React.useState(false)
	const [date, setDate] = React.useState<Date | undefined>()
	const [month, setMonth] = React.useState<Date | undefined>(date)
	const [value, setValue] = React.useState(formatDate(date))

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel htmlFor={field.name}>{fieldLabel}</FieldLabel>
			<FieldDescription>{fieldDescription}</FieldDescription>
			<InputGroup>
				<InputGroupInput
					id={field.name}
					name={field.name}
					value={value}
					placeholder="Select a date"
					onChange={(e) => {
						const date = new Date(field.state.value)
						setValue(field.state.value)
						if (isValidDate(date)) {
							setDate(date)
							setMonth(date)
						}
					}}
					onKeyDown={(e) => {
						if (e.key === 'ArrowDown') {
							e.preventDefault()
							setOpen(true)
						}
					}}
				/>
				<InputGroupAddon align="inline-end">
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<InputGroupButton
								id="date-picker"
								variant="ghost"
								size="icon-xs"
								aria-label="Select date"
							>
								<CalendarIcon />
								<span className="sr-only">Select date</span>
								{/* {field.state.value ? format(field.state.value, 'PPP') : null} */}
							</InputGroupButton>
						</PopoverTrigger>
						<PopoverContent
							className="w-auto overflow-hidden p-0"
							align="end"
							alignOffset={-8}
							sideOffset={10}
						>
							<Calendar
								mode="single"
								selected={field.state.value}
								month={month}
								onMonthChange={setMonth}
								onSelect={(date) => {
									field.handleChange(date)
									setDate(date)
									setValue(formatDate(date))
									setOpen(false)
								}}
								// onSelect={field.handleChange}
								// disabled={(date) =>
								// 	date > new Date() || date < new Date('1900-01-01')
								// }
							/>
						</PopoverContent>
					</Popover>
				</InputGroupAddon>
			</InputGroup>
			{isInvalid && <FieldError errors={field.state.meta.errors} />}
		</Field>
	)
}

{
	/* <form.Field
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
										<Input
											id={field.name}
											name={field.name}
											type="date"
											value={field.state.value as string}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="Select a date"
										/>

										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								)
							}}
						/> */
}
