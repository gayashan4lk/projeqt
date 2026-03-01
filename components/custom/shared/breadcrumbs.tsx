import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { clsx } from 'clsx'
import { Fragment } from 'react'

type Breadcrumb = {
	label: string
	href: string
	active?: boolean
}

export default function Breadcrumbs({
	breadcrumbs,
}: {
	breadcrumbs: Breadcrumb[]
}) {
	return (
		<div className="mb-2 py-2">
			<Breadcrumb>
				<BreadcrumbList>
					{breadcrumbs.map((breadcrumb, index) => (
						<Fragment key={index}>
							<BreadcrumbItem
								aria-current={breadcrumb.active}
								className={clsx(
									breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
								)}
							>
								<BreadcrumbLink href={breadcrumb.href}>
									{breadcrumb.label}
								</BreadcrumbLink>
							</BreadcrumbItem>
							{index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
						</Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	)
}
