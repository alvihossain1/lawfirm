import Dashboard from "@/app/dashboard"
import { columns } from "./columns"
import { DataTable } from "./data-table"

async function getData() {
    // Fetch data from your API here.
    return [
        {id: '101', clientName: 'James Alonso', caseType: 'xyz', file: 'asfasf', appointmentDate: 'PDF', time: '8:03 AM', action: 'take action'   },     
        {id: '102', clientName: 'Maven Jones', caseType: 'zzs', file: 'Rigelx', appointmentDate: 'PDF', time: '8:03 AM', action: 'take action'   },     
   
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <Dashboard>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </Dashboard>
    )
}
