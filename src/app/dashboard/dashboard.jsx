import AuthCheck from "@/components/all/AuthCheck";
import { AppSidebar } from "@/components/app-sidebar"

import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"



export default function Dashboard({ children }) {
    return (
        <AuthCheck>
            <div>
                <SidebarProvider
                    style={
                        {
                            "--sidebar-width": "calc(var(--spacing) * 72)",
                            "--header-height": "calc(var(--spacing) * 12)"
                        }
                    }>
                    <AppSidebar variant="inset" />
                    <SidebarInset>
                        <SiteHeader />
                        <div className="p-3 md:p-6">
                            {children}
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </AuthCheck>
    );
}
