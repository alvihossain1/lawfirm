"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAuth } from "./providers/AuthProvider"
import { CalendarClock, Files, Gavel, Hammer, LogOut, MessageSquareText, Settings } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { SidebarItemsAdmin } from "./sidebar-items-admin"

// const data = {
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "/dashboard",
//       icon: IconDashboard,
//     },
//     {
//       title: "Attorney",
//       url: "#",
//       icon: Hammer,
//     },
//     {
//       title: "Analytics",
//       url: "#",
//       icon: IconChartBar,
//     },
//     {
//       title: "Projects",
//       url: "#",
//       icon: IconFolder,
//     },
//     {
//       title: "Team",
//       url: "#",
//       icon: IconUsers,
//     },
//   ],
//   navClouds: [
//     {
//       title: "Capture",
//       icon: IconCamera,
//       isActive: true,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Proposal",
//       icon: IconFileDescription,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Prompts",
//       icon: IconFileAi,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Settings",
//       url: "#",
//       icon: IconSettings,
//     },
//     {
//       title: "Get Help",
//       url: "#",
//       icon: IconHelp,
//     },
//     {
//       title: "Search",
//       url: "#",
//       icon: IconSearch,
//     },
//   ],
//   documents: [
//     {
//       name: "Data Library",
//       url: "#",
//       icon: IconDatabase,
//     },
//     {
//       name: "Reports",
//       url: "#",
//       icon: IconReport,
//     },
//     {
//       name: "Word Assistant",
//       url: "#",
//       icon: IconFileWord,
//     },
//   ],
// }

const userData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/users/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Attorney",
      url: "/users/attorney",
      icon: Gavel,
    },
    {
      title: "Appointments",
      url: "/users/appointments",
      icon: CalendarClock,
    },
    {
      title: "Files",
      url: "/users/files",
      icon: Files,
    },
    {
      title: "Messages",
      url: "/users/messages",
      icon: MessageSquareText,
    },

  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Help & Info",
      url: "/dashboard/help_info",
      icon: IconHelp,
    },
  ],
}

const attorneyData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/attorney/dashboard",
      icon: IconDashboard,
    },
    {
      title: "My Cases",
      url: "/attorney/mycases",
      icon: Gavel,
    },
    {
      title: "Booking",
      url: "/attorney/booking",
      icon: CalendarClock,
    },
    {
      title: "Availability",
      url: "/attorney/availability",
      icon: Files,
    },
    {
      title: "Clients",
      url: "/attorney/clients",
      icon: MessageSquareText,
    },
    {
      title: "Messages",
      url: "/attorney/messages",
      icon: MessageSquareText,
    },

  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Help & Info",
      url: "/dashboard/help_info",
      icon: IconHelp,
    },
  ],
}

const adminData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Attorney",
      url: "/admin/attorney",
      icon: Gavel,
    },
    {
      title: "Case Study",
      url: "/admin/case_study",
      icon: CalendarClock,
    },
    {
      title: "Case Type",
      url: "/admin/case_type",
      icon: Files,
    },
  ],
  navMainSecondary: [
    {
      title: "Payment",
      url: "/admin/payment",
      icon: MessageSquareText,
      items: [
        {
          title: "Payment Method",
          url: "/admin/payment_method",
          icon: MessageSquareText,
        },
        {
          title: "Payment List",
          url: "/admin/payment_list",
          icon: MessageSquareText,
        },
      ]
    },
  ],
  navMainThird: [
    {
      title: "Category",
      url: "/admin/category",
      icon: MessageSquareText,
      items: [
        {
          title: "Category",
          url: "/admin/category",
          icon: MessageSquareText,
        },
        {
          title: "Tags",
          url: "/admin/tags",
          icon: MessageSquareText,
        },
        {
          title: "Blogs",
          url: "/admin/blogs",
          icon: MessageSquareText,
        },
      ]
    },
  ],
  navMainFourth: [
    {
      title: "Service",
      url: "/admin/service",
      icon: MessageSquareText,
      items: [
        {
          title: "Service",
          url: "/admin/service",
          icon: MessageSquareText,
        },
        {
          title: "News Letter",
          url: "/admin/news_letter",
          icon: MessageSquareText,
        },
        {
          title: "Testimonial",
          url: "/admin/testimonial",
          icon: MessageSquareText,
        },
      ]
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Help & Info",
      url: "/dashboard/help_info",
      icon: IconHelp,
    },
  ],
}

export function AppSidebar({ ...props }) {


  const { data: session } = useSession()



  return (
    (<Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <div className="cursor-default">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-lg font-semibold">{process.env.APP_NAME}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {session?.user && <NavMain items={session?.user?.role === 'user' ? userData.navMain : session?.user?.role === 'attorney' ? attorneyData.navMain : []} />}
        {/* <NavDocuments items={data.documents} />  */}
        {session?.user?.role === 'admin' && (
          <div>
            <SidebarItemsAdmin items={adminData.navMain} group={'Platform'} />
            <SidebarItemsAdmin items={adminData.navMainSecondary} group={'Payment'} />
            <SidebarItemsAdmin items={adminData.navMainThird} group={'Blogs'} />
            <SidebarItemsAdmin items={adminData.navMainFourth} group={'Other'} />
          </div>
        )}
      </SidebarContent>
      <SidebarFooter>
        {session?.user && <NavSecondary items={session?.user?.role === 'user' ? userData.navSecondary : session?.user?.role === 'attorney' ? attorneyData.navSecondary : session?.user?.role === 'admin' ? adminData.navSecondary : []} />}
        {session?.user && <NavUser user={session?.user} />}
      </SidebarFooter>
    </Sidebar>)
  );
}
