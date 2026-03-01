'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

export default function DatePickerInput({ field }: { field: any }) {
	const [date, setDate] = React.useState<Date>()

	return (
		<>
			<input
				id={field.name}
				name={field.name}
				type="hidden"
				value={field.state.value as string}
			/>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						data-empty={!date}
						className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
					>
						<CalendarIcon />
						{date ? format(date, 'dd MMMM yyyy') : <span>Select date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={date}
						onSelect={(e) => {
							setDate(e)
							if (e) {
								field.handleChange(format(e, 'yyyy-MM-dd'))
							}
						}}
					/>
				</PopoverContent>
			</Popover>
		</>
	)
}
