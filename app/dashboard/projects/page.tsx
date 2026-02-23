import { Button } from '@/components/ui/button'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import ProjectCard from '@/components/custom/project-card'

export default async function Projects() {
	const projects = await prisma.project.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})

	return (
		<div>
			<main>
				<h1 className="text-4xl">Organization {'>'} Projects</h1>
				<Button variant="default">
					<Link href="/dashboard/projects/new">New Project</Link>
				</Button>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						name={project.name}
						description={project.description || ''}
						startDate={project.startDate}
						deliveryDate={project.deliveryDate}
						status={project.status}
					/>
				))}
			</main>
		</div>
	)
}
