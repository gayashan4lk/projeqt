import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/custom/app-sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				<SidebarTrigger />
				<div className="mt-6 px-6">{children}</div>
			</main>
		</SidebarProvider>
	)
}
