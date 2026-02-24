import prisma from '@/lib/prisma'
import ProjectCard from '@/components/custom/project-card'

export default async function ProjectsList() {
	const projects = await prisma.project.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})

	return (
		<div className="flex flex-wrap gap-4">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	)
}
