import Dashboard from "@/app/dashboard"
import { columns } from "./columns"
import { DataTable } from "./data-table"

async function getData() {
    // Fetch data from your API here.
    return [
        {id: '101', date: '05 May,2025', attorneyName: 'Rafsan Mehede', fileName: 'asfasf', fileType: 'PDF', action: 'take action'   },     
   
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
