import { Button } from '@/components/ui/button'
import Link from 'next/link'
import prisma from '@/lib/prisma'

export default async function AllProjects() {
	const projects = await prisma.project.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})

	return (
		<div>
			<main>
				<h1 className="text-4xl">Organization {">"} Projects</h1>
				<Button variant="default">
					<Link href="/dashboard/project/new">New Project</Link>
				</Button>
				<ol>
					{projects.map((project) => (
						<li key={project.id}>
							{project.name} | {project.status} | {project.startDate.toDateString()} -{' '}
							{project.deliveryDate.toDateString()} | {project.description}
						</li>
					))}
				</ol>
			</main>
		</div>
	)
}