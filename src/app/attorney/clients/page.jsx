import Dashboard from "@/app/dashboard"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Card, CardContent } from "@/components/ui/card"

async function getData() {
    // Fetch data from your API here.
    return [
        {id: '101', clientName: 'James Alonso', email: 'xyz@gmail.com', phone: 'asfasf',action: 'take action'   },     
        {id: '102', clientName: 'Maven Jones', email: 'zzs@gmail.com', phone: 'Rigelx', action: 'take action'   },     
   
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <Dashboard>
            <div className="container mx-auto py-10">
                <Card className='p-0 md:p-2'>
                    <CardContent className='p-0 md:p-2'>
                        <DataTable columns={columns} data={data} />
                    </CardContent>
                </Card>
            </div>
        </Dashboard>
    )
}
