import DeleteProjectButton from '@/components/custom/project/delete-project-button'
import ProjectStatusBadge from '@/components/custom/project/project-status-badge'
import Breadcrumbs from '@/components/custom/shared/breadcrumbs'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/prisma'
import { Pencil } from 'lucide-react'
import Link from 'next/link'

export default async function ProjectPage(props: {
	params: Promise<{ id: string }>
}) {
	const { id } = await props.params

	const project = await prisma.project.findUnique({
		where: { id: id },
	})

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
							active: false,
						},
						{
							label: project.name,
							href: `/dashboard/projects/${id}`,
							active: true,
						},
					]}
				/>
				<div className="flex flex-row justify-between">
					<h1 className="text-2xl font-bold">{project.name}</h1>
					<Link href={`/dashboard/projects/${id}/edit`}>
						<Button variant="default" className="mb-2 cursor-pointer">
							<Pencil />
							Edit
						</Button>
					</Link>
					<DeleteProjectButton id={id} />
				</div>
				<div className="mt-4 grid gap-3 divide-y">
					<DescriptionListItem field="Name" children={project.name} />
					<DescriptionListItem
						field="Description"
						children={project.description || ''}
					/>
					<DescriptionListItem
						field="Start Date"
						children={project.startDate?.toLocaleDateString('en-GB')}
					/>
					<DescriptionListItem
						field="Delivery Date"
						children={project.deliveryDate?.toLocaleDateString('en-GB')}
					/>
					<DescriptionListItem
						field="Status"
						children={<ProjectStatusBadge status={project.status} />}
					/>
					<DescriptionListItem
						field="Created At"
						children={project.createdAt.toISOString()}
					/>
					<DescriptionListItem
						field="Updated At"
						children={project.updatedAt.toISOString()}
					/>
					<DescriptionListItem
						field="Active"
						children={project.active ? 'Yes' : 'No'}
					/>
				</div>
			</main>
		</div>
	)
}

function DescriptionListItem({
	field,
	children,
}: {
	field: string
	children: React.ReactNode
}) {
	return (
		<dl className="grid pb-3 md:grid-cols-2">
			<dt className="text-sm font-medium text-gray-500">{field}</dt>
			<dd className="text-sm">{children}</dd>
		</dl>
	)
}
