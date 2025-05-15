"use client"

import { ChevronRight, Dot } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function SidebarItems({ items, group }) {

  const pathname = usePathname()

  return (
    <SidebarGroup>
      {group && <SidebarGroupLabel>{group}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item, index) => (
          <div key={index}>
            {!item?.items ? (
              <SidebarMenuItem>
                <Link href={item.url}>
                  <SidebarMenuButton className={`py-5 md:px-3 text-[1.1rem] mb-1 transition-all duration-300 ${pathname === item.url ? 'bg-purple-400 text-white hover:text-white hover:bg-neutral-600 dark:bg-purple-400 dark:text-black hover:bg-purple-400' : 'hover:bg-neutral-200 dark:hover:bg-neutral-50/20'}`} tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {pathname !== item.url && pathname.includes(item.url) && <span className="ml-auto text-neutral-300 dark:text-purple-400"><Dot size={35} /></span>}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ) : (
              <Collapsible
                asChild
                defaultOpen={pathname.includes(item.title.toLowerCase())}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title} className={`py-5 md:px-3 text-[1.1rem] mb-1 transition-all duration-300 ${pathname === item.url ? 'bg-purple-400 text-white hover:text-white hover:bg-neutral-600 dark:bg-purple-400 dark:text-black hover:bg-purple-400' : 'hover:bg-neutral-200 dark:hover:bg-neutral-50/20'}`}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className='mx-0.5'>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <Link href={subItem.url}>
                            <SidebarMenuSubButton className={`py-5 md:px-3 text-[0.95rem] tracking-wide transition-all duration-300 ${pathname === subItem.url ? 'bg-purple-400 text-white hover:text-white hover:bg-neutral-600 dark:bg-purple-400 dark:text-black hover:bg-purple-400' : 'hover:bg-neutral-200 dark:hover:bg-neutral-50/20'}`}>
                              {item.icon && <item.icon />}
                              <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          </Link>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )}
          </div>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

{/* <SidebarMenuItem className='mx-0.5'>
  {item.items?.map((subItem) => (
    <SidebarMenuSubItem key={subItem.title}>
      <Link href={subItem.url}>
        <SidebarMenuButton className={`py-5 md:px-3 text-[0.95rem] mb-1 tracking-wide transition-all duration-300 ${pathname === subItem.url ? 'bg-purple-400 text-white hover:text-white hover:bg-neutral-600 dark:bg-purple-400 dark:text-black hover:bg-purple-400' : 'hover:bg-neutral-200 dark:hover:bg-neutral-50/20'}`}>
          {item.icon && <item.icon />}
          <span>{subItem.title}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuSubItem>
  ))}
</SidebarMenuItem> */}