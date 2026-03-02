import { deleteProject } from '@/actions/projectAction'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function DeleteProjectButton({ id }: { id: string }) {
	const deleteProjectWithId = deleteProject.bind(null, id)

	return (
		<form action={deleteProjectWithId}>
			<Button type="submit" variant="destructive">
				<Trash2 />
				Delete Project
			</Button>
		</form>
	)
}
