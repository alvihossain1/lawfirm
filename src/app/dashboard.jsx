import AuthCheck from "@/components/all/AuthCheck";
import BaseTemplateBg from "@/components/all/BaseTemplateBg";
import { AppSidebar } from "@/components/app-sidebar"

import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"



export default function Dashboard({ children }) {

    return (

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
                    <BaseTemplateBg>
                    {children}
                    </BaseTemplateBg>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}
