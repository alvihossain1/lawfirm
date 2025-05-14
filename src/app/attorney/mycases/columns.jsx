"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { File, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { useRouter } from "next/navigation"

export const columns = [
    {
        accessorKey: "caseType",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Case Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "clientName",
        header: "Client Name",
    },
    {
        id: "essentialFile",
        header: 'Essential File',
        cell: ({ row }) => {
            return (
                <Button onClick={() => {console.log('Download file', row.original.essentialFile)}}><File /> Pdf</Button>
            )
        },
    },
    {
        accessorKey: "appointmentDate",
        header: "Appointment Date",
    },
    {
        id: "action",
        cell: ({ row }) => {
            const router = useRouter(); // Initialize the router
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                        {/* <DropdownMenuSeparator /> */}
                        <DropdownMenuItem onClick={() => { router.push(`/attorney/mycases/${row.original.id}`) }}>View</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]