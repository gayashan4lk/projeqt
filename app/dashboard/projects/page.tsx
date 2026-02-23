import ProjectsList from '@/components/custom/projects-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ProjectCardSkeleton } from '@/components/custom/skeletons'
import { Suspense } from 'react'

export default async function Projects() {
	return (
		<div>
			<main>
				<h1 className="text-4xl">Organization {'>'} Projects</h1>
				<Button variant="default">
					<Link href="/dashboard/projects/new">New Project</Link>
				</Button>
				<Suspense fallback={<ProjectCardSkeleton />}>
					<ProjectsList />
				</Suspense>
			</main>
		</div>
	)
}
