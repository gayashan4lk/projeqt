'use client'

import { createProject } from '@/actions/projectAction'
import { Button } from '@/components/ui/button'
import { CreateProjectActionResponse } from '@/types/projectSchema'
import { useActionState } from 'react'

const initialState: CreateProjectActionResponse = {
	success: false,
	message: '',
}

export default function ProjectCreateFormBasic() {
	const [state, action, isPending] = useActionState(createProject, initialState)

	const fieldErrors = state?.errors?.fieldErrors || {}

	return (
		<form action={action} className="w-96">
			<div className="space-y-4">
				<div className="space-y-1">
					<label htmlFor="name" className="block font-semibold">
						Name
					</label>
					<input
						type="text"
						name="name"
						placeholder="Project Name"
						className="block w-full rounded-md border-2 border-slate-300 p-2"
					/>
					{fieldErrors.name && (
						<p className="text-sm text-red-500">{fieldErrors.name[0]}</p>
					)}
				</div>
				<div className="space-y-1">
					<label htmlFor="description" className="block font-semibold">
						Description
					</label>
					<input
						type="text"
						name="description"
						placeholder="Project Description"
						className="block w-full rounded-md border-2 border-slate-300 p-2"
					/>
					{fieldErrors.description && (
						<p className="text-sm text-red-500">{fieldErrors.description[0]}</p>
					)}
				</div>
				<div className="space-y-1">
					<label htmlFor="startDate" className="block font-semibold">
						Start Date
					</label>
					<input
						type="date"
						name="startDate"
						className="block w-full rounded-md border-2 border-slate-300 p-2"
					/>
					{fieldErrors.startDate && (
						<p className="text-sm text-red-500">{fieldErrors.startDate[0]}</p>
					)}
				</div>
				<div className="space-y-1">
					<label htmlFor="deliveryDate" className="block font-semibold">
						Delivery Date
					</label>
					<input
						type="date"
						name="deliveryDate"
						className="block w-full rounded-md border-2 border-slate-300 p-2"
					/>
					{fieldErrors.deliveryDate && (
						<p className="text-sm text-red-500">
							{fieldErrors.deliveryDate[0]}
						</p>
					)}
				</div>
				<div className="space-y-1">
					<label htmlFor="status" className="block font-semibold">
						Status
					</label>
					<select name="status" id="status" defaultValue="NOT_STARTED">
						<option value="NOT_STARTED">Not Started</option>
						<option value="ON_TRACK">On Track</option>
						<option value="OFF_TRACK">Off Track</option>
						<option value="ON_HOLD">On Hold</option>
						<option value="COMPLETED">Completed</option>
					</select>
					{fieldErrors.status && (
						<p className="text-sm text-red-500">{fieldErrors.status[0]}</p>
					)}
				</div>
				<Button type="submit" className="cursor-pointer" disabled={isPending}>
					{isPending ? 'Loading' : 'Submit'}
				</Button>
			</div>
		</form>
	)
}
