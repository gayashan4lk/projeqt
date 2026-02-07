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

const data = {
	navMain: [
		{
			title: 'Organization',
			url: '/dashboard',
			items: [
				{ title: 'Overview', url: '/dashboard', isActive: true },
				{ title: 'Projects', url: '/dashboard/project/all', isActive: false },
				{ title: 'Clients', url: '/dashboard/client/all', isActive: false },
				{ title: 'Teams', url: '/dashboard/team/all', isActive: false },
				{ title: 'Payment summary', url: '/dashboard/payment-summary', isActive: false },
				{ title: 'Delivery calendar', url: '/dashboard/delivery-calendar', isActive: false },
			],
		},
	],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader />

			<SidebarContent>
				<SidebarGroup />
				<SidebarGroupLabel>Organization</SidebarGroupLabel>
				<SidebarMenu>
					{data.navMain.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<a href={item.url} className="font-medium">
									{item.title}
								</a>
							</SidebarMenuButton>
							{item.items?.length ? (
								<SidebarMenuSub>
									{item.items.map((item) => (
										<SidebarMenuSubItem key={item.title}>
											<SidebarMenuSubButton asChild isActive={item.isActive}>
												<a href={item.url}>{item.title}</a>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									))}
								</SidebarMenuSub>
							) : null}
						</SidebarMenuItem>
					))}
				</SidebarMenu>
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
