import ProjectsList from '@/components/custom/project/projects-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ProjectCardSkeleton } from '@/components/custom/skeletons'
import { Suspense } from 'react'
import { FolderPlus } from 'lucide-react'

export default async function Projects() {
	return (
		<div>
			<main>
				<Button variant="default" className="mb-2">
					<FolderPlus />
					<Link href="/dashboard/projects/create">New Project</Link>
				</Button>
				<Suspense fallback={<ProjectCardSkeleton />}>
					<ProjectsList />
				</Suspense>
			</main>
		</div>
	)
}
