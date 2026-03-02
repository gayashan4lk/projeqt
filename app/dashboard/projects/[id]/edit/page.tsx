import ProjectEditForm from '@/components/custom/project/project-edit-form'
import Breadcrumbs from '@/components/custom/shared/breadcrumbs'
import prisma from '@/lib/prisma'

export default async function EditProject(props: {
	params: Promise<{ id: string }>
}) {
	const { id } = await props.params

	const project = await prisma.project.findUnique({
		where: { id: id },
	})

	console.log(project)

	if (!project) {
		return (
			<div>
				<main>
					<h1>Project not found</h1>
				</main>
			</div>
		)
	}

	return (
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
						active: false,
					},
					{
						label: project.name,
						href: `/dashboard/projects/${id}`,
						active: false,
					},
					{
						label: 'Edit',
						href: `/dashboard/projects/${id}/edit`,
						active: true,
					},
				]}
			/>
			<h1 className="pb-4 text-2xl font-bold">Edit {project.name}</h1>

			<ProjectEditForm project={project} />
		</main>
	)
}
