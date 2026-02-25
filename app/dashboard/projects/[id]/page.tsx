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
				<div className="grid gap-3">
					<dl className="grid md:grid-cols-2">
						<dt className="text-sm font-medium text-gray-500">Name</dt>
						<dd className="text-sm">{project.name}</dd>
					</dl>
					<dl className="grid md:grid-cols-2">
						<dt>Description</dt>
						<dd>{project.description}</dd>
					</dl>
					<dl className="grid md:grid-cols-2">
						<dt>Start Date</dt>
						<dd>{project.startDate?.toLocaleDateString('en-GB')}</dd>
					</dl>
					<dl className="grid md:grid-cols-2">
						<dt>Delivery Date</dt>
						<dd>{project.deliveryDate?.toLocaleDateString('en-GB')}</dd>
					</dl>
					<dl className="grid md:grid-cols-2">
						<dt>Status</dt>
						<dd>{project.status}</dd>
					</dl>
					<dl className="grid md:grid-cols-2">
						<dt>Created At</dt>
						<dd>{project.createdAt.toISOString()}</dd>
					</dl>
					<dl className="grid md:grid-cols-2">
						<dt>Updated At</dt>
						<dd>{project.updatedAt.toISOString()}</dd>
					</dl>
					<dl className="grid md:grid-cols-2">
						<dt>Active</dt>
						<dd>{project.active ? 'Yes' : 'No'}</dd>
					</dl>
				</div>
			</main>
		</div>
	)
}
