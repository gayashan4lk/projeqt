import ProjectsList from '@/components/custom/project/projects-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ProjectCardSkeleton } from '@/components/custom/skeletons'
import { Suspense } from 'react'
import { FolderPlus } from 'lucide-react'
import Breadcrumbs from '@/components/custom/shared/breadcrumbs'

export default async function Projects() {
	return (
		<div>
			<main>
				<Breadcrumbs
					breadcrumbs={[
						{
							label: 'Dashboard',
							href: '/dashboard',
							active: false,
						},
						{
							label: 'Projects',
							href: '/dashboard/projects',
							active: true,
						},
					]}
				/>
				<Link href="/dashboard/projects/create">
					<Button variant="default" className="mb-2 cursor-pointer">
						<FolderPlus />
						New Project
					</Button>
				</Link>
				<Suspense fallback={<ProjectCardSkeleton />}>
					<ProjectsList />
				</Suspense>
			</main>
		</div>
	)
}
