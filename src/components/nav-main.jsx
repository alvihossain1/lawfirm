"use client"

import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react";

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { ChevronRight } from "lucide-react";
export function NavMain({
  items
}) {

  const pathname = usePathname()

  return (
    (<SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link href={item.url}>
                <SidebarMenuButton className={`py-5 md:px-3 text-[1.1rem] mb-1 transition-all duration-300 ${pathname === item.url ? 'bg-purple-400 text-white hover:bg-neutral-600 dark:bg-purple-400 dark:text-white hover:bg-purple-400' : 'hover:bg-neutral-200 dark:hover:bg-neutral-50/20'}`} tooltip={item.title}>

                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {pathname !== item.url && pathname.includes(item.url) && <span className="ml-auto"><ChevronRight size={20}/></span>}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>)
  );
}

