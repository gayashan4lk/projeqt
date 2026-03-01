import ProjectCreateForm from '@/components/custom/project/project-create-form'
import Breadcrumbs from '@/components/custom/shared/breadcrumbs'

export default function CreateProject() {
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
						label: 'Create Project',
						href: '/dashboard/projects/create',
						active: true,
					},
				]}
			/>
			<ProjectCreateForm />
		</main>
	)
}
