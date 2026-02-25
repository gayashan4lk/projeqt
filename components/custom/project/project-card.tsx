import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project, ProjectStatus } from '@/types/projectSchema'
import { Button } from '@/components/ui/button'
import { CircleArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { getStatusLabel } from '@/lib/utils'

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
				<Badge
					className={clsx({
						'bg-green-200 text-green-800': project.status === 'ON_TRACK',
						'bg-red-200 text-red-800': project.status === 'OFF_TRACK',
						'bg-yellow-200 text-yellow-800': project.status === 'ON_HOLD',
						'bg-slate-200 text-slate-800': project.status === 'NOT_STARTED' || project.status === 'COMPLETED',
					})}
				>
					{getStatusLabel(project.status)}
				</Badge>
			</CardFooter>
		</Card>
	)
}
