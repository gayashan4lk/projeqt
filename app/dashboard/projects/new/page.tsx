'use client'

import { createProject } from '@/actions/projectAction'
import { Button } from '@/components/ui/button'
import { CreateProjectActionResponse } from '@/types/projectSchema'
import { useActionState } from 'react'

const initialState : CreateProjectActionResponse = {
	success: false,
	message: '',
}

export default function NewProject() {
	const [state, action, isPending] = useActionState(createProject, initialState)

	const fieldErrors = state?.errors?.fieldErrors || {}

	return (
		<div>
			<main>
				<h1 className="text-4xl">Create New Project</h1>
				<form action={action}>
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
							{fieldErrors.name && <p className="text-red-500 text-sm">{fieldErrors.name[0]}</p>}
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
							{fieldErrors.description && <p className="text-red-500 text-sm">{fieldErrors.description[0]}</p>}
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
							{fieldErrors.startDate && <p className="text-red-500 text-sm">{fieldErrors.startDate[0]}</p>}
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
							{fieldErrors.deliveryDate && <p className="text-red-500 text-sm">{fieldErrors.deliveryDate[0]}</p>}
						</div>
						<div className="space-y-1">
							<label htmlFor="status" className="block font-semibold">
								Status
							</label>
							<select name="status" id="status" defaultValue="not-started">
								<option value="not-started">Not Started</option>
								<option value="on-track">On Track</option>
								<option value="off-track">Off Track</option>
								<option value="on-hold">On Hold</option>
								<option value="completed">Completed</option>
							</select>
							{fieldErrors.status && <p className="text-red-500 text-sm">{fieldErrors.status[0]}</p>}
						</div>
						<Button type="submit" className="cursor-pointer" disabled={isPending}>
							{isPending ? 'Loading' : 'Submit'}
						</Button>
					</div>
				</form>
			</main>
		</div>
	)
}
