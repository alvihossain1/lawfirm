// import React from 'react'
// import Dashboard from '../../dashboard'
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from '@/components/ui/button'
// import { DataTable } from '@/components/data-table'
// import data from "./data.json"

// export default function Appointments() {

//     return (
//         <Dashboard>
//             <DataTable data={data}/>
//         </Dashboard>
//     )
// }



import Dashboard from "@/app/dashboard"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Card, CardContent } from "@/components/ui/card"

async function getData() {
    // Fetch data from your API here.
    return [
        {id: '101', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },        
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
        {id: '102', caseType: 'something', attorney: 'asf', caseStatus: 'asfasf', appointmentDate: 'this itsx', action: 'take action'   },
   
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <Dashboard>
            <div className="container mx-auto py-10">
                <Card className='p-0 md:px-2'>
                    <CardContent className='p-0 md:px-2'>
                        <DataTable columns={columns} data={data} />
                    </CardContent>
                </Card>
            </div>
        </Dashboard>
    )
}
