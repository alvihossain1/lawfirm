'use client'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useSession } from "next-auth/react"
import { NavDropDown } from "./nav-dropdown";

export function SiteHeader() {

  const {data: session} = useSession()
  const pathnames = usePathname().substring(1).split('/')
  
  return (
    (<header
      className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              {typeof pathnames === 'object' && pathnames.map((pathname, index) => (
                <div key={'breadcrumb-'+ index} className="flex justify-center items-center gap-2">
                  <BreadcrumbItem>
                    {index === pathnames.length - 1 ? <BreadcrumbPage >{pathname}</BreadcrumbPage> : <BreadcrumbLink>{pathname}</BreadcrumbLink>}
                  </BreadcrumbItem>
                  {index < pathnames.length - 1 && <BreadcrumbSeparator />}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

        </div>
        <div className="ml-auto flex items-center gap-2">
          {session?.user && <NavDropDown user={session.user} />}
        </div>
      </div>
    </header>)
  );
}
