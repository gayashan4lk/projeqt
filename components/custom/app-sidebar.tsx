import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '@/components/ui/sidebar'

const orgMenu = [
	{ title: 'Overview', url: '/dashboard', isActive: true },
	{ title: 'Projects', url: '/dashboard/project/all', isActive: false },
	{ title: 'Clients', url: '/dashboard/client/all', isActive: false },
	{ title: 'Teams', url: '/dashboard/team/all', isActive: false },
	{ title: 'Payment summary', url: '/dashboard/payment-summary', isActive: false },
	{ title: 'Delivery calendar', url: '/dashboard/delivery-calendar', isActive: false },
]

const projectMenu = [
	{ title: 'Overview', url: '/dashboard/project/1', isActive: true },
	{ title: 'Details', url: '/dashboard/project/1/details', isActive: false },
	{ title: 'Team', url: '/dashboard/project/1/team', isActive: false },
	{ title: 'RAID', url: '/dashboard/project/1/raid', isActive: false },
	{ title: 'Current Week Plan', url: '/dashboard/project/1/current-week-plan', isActive: false },
	{ title: 'Next Week Plan', url: '/dashboard/project/1/next-week-plan', isActive: false },
	{ title: 'Milestone Plane', url: '/dashboard/project/1/milestone-plane', isActive: false },
	{ title: 'Change Log', url: '/dashboard/project/1/change-log', isActive: false },
	{ title: 'Decision Log', url: '/dashboard/project/1/decision-log', isActive: false },
	{ title: 'Payments', url: '/dashboard/project/1/payments', isActive: false },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader />

			<SidebarContent>
				<SidebarGroup />
				<SidebarGroupLabel>Organization</SidebarGroupLabel>
				<SidebarMenu>
					{orgMenu.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<a href={item.url} className="font-medium">
									{item.title}
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
				<SidebarGroup />
				<SidebarGroup />
				<SidebarGroupLabel>Project</SidebarGroupLabel>
				<SidebarMenu>
					{projectMenu.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<a href={item.url} className="font-medium">
									{item.title}
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
