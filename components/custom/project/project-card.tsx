import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project } from '@/types/projectSchema'
import { CircleArrowRight } from 'lucide-react'
import Link from 'next/link'
import ProjectStatusBadge from './project-status-badge'

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="w-60">
			<CardHeader className="border-b">
				<CardTitle>{project.name}</CardTitle>
				<CardAction>
					<Link href={`/dashboard/projects/${project.id}`}>
						<CircleArrowRight size={20} />
					</Link>
				</CardAction>
			</CardHeader>
			<CardContent>
				<span className="text-sm text-slate-500">Start: {project.startDate?.toLocaleDateString('en-GB')}</span>
				<br />
				<span className="text-sm text-slate-500">Delivery: {project.deliveryDate?.toLocaleDateString('en-GB')}</span>
			</CardContent>
			<CardFooter>
				<ProjectStatusBadge status={project.status} />
			</CardFooter>
		</Card>
	)
}
