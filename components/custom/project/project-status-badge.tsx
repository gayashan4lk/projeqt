import { Badge } from '@/components/ui/badge'
import { getStatusLabel } from '@/lib/utils'
import { ProjectStatus } from '@/types/projectSchema'
import clsx from 'clsx'

export default function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
	return (
		<Badge
			className={clsx({
				'bg-green-200 text-green-800': status === 'ON_TRACK',
				'bg-red-200 text-red-800': status === 'OFF_TRACK',
				'bg-yellow-200 text-yellow-800': status === 'ON_HOLD',
				'bg-slate-200 text-slate-800': status === 'NOT_STARTED' || status === 'COMPLETED',
			})}
		>
			{getStatusLabel(status)}
		</Badge>
	)
}
