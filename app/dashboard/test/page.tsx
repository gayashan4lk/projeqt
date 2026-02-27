'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Field } from '@/components/ui/field'

export default function TestPage() {
	const [date, setDate] = React.useState<Date>()
	const [value, setValue] = React.useState<string>('')

	return (
		<div className="w-[300px]">
			<Field>
				<input
					type="hidden"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className="border"
				/>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							data-empty={!date}
							className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
						>
							<CalendarIcon />
							{/* {date ? format(date, 'PPP') : <span>Pick a date</span>} */}
							{date ? format(date, 'dd MMM yyyy') : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={date}
							onSelect={(e) => {
								setDate(e)
								setValue(e?.toISOString() || '')
							}}
						/>
					</PopoverContent>
				</Popover>
			</Field>
			<Field>
				<Button type="submit">Submit</Button>
			</Field>
		</div>
	)
}
