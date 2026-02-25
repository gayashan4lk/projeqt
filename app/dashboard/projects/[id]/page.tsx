import prisma from '@/lib/prisma'

export default async function ProjectPage(props: { params: { id: string } }) {
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
				<h1 className="text-2xl font-bold">{project.name}</h1>
				<div className="mt-4 grid gap-3 divide-y">
					<DescriptionListItem field="Name" value={project.name} />
					<DescriptionListItem field="Description" value={project.description || ''} />
					<DescriptionListItem field="Start Date" value={project.startDate?.toLocaleDateString('en-GB')} />
					<DescriptionListItem field="Delivery Date" value={project.deliveryDate?.toLocaleDateString('en-GB')} />
					<DescriptionListItem field="Status" value={project.status} />
					<DescriptionListItem field="Created At" value={project.createdAt.toISOString()} />
					<DescriptionListItem field="Updated At" value={project.updatedAt.toISOString()} />
					<DescriptionListItem field="Active" value={project.active ? 'Yes' : 'No'} />
				</div>
			</main>
		</div>
	)
}

function DescriptionListItem({ field, value }: { field: string; value: string }) {
	return (
		<dl className="grid pb-3 md:grid-cols-2">
			<dt className="text-sm font-medium text-gray-500">{field}</dt>
			<dd className="text-sm">{value}</dd>
		</dl>
	)
}
