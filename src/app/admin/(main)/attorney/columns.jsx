"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { MoreHorizontal, Pen, Trash } from "lucide-react"

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
import { DialogDelete, DialogEdit } from "./dialog"

export const columns = [
    {
        accessorKey: 'image',
        header: 'Image',
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
    },
    {
        accessorKey: 'caseType',
        header: 'Case Type',
    },
    {
        accessorKey: 'experience',
        header: 'Experience',
    },
    {
        id: "action",
        cell: ({ row }) => {
            const data = row.original

            return (
                <div className="flex justify-end gap-2">
                    <DialogEdit />
                    <DialogDelete />

                </div>
            )
        },
    },
]