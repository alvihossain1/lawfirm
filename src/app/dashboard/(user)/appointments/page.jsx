import React from 'react'
import Dashboard from '../../dashboard'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/data-table'
import data from "./data.json"

export default function Appointments() {

    return (
        <Dashboard>
            <DataTable data={data}/>
        </Dashboard>
    )
}
