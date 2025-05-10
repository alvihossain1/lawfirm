import React from 'react'
import Dashboard from './dashboard'
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { Gavel } from "lucide-react"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowUpDown, Scale } from "lucide-react";

export default function Page() {
  return (
    <Dashboard>
      <div className="flex flex-1 flex-col">



        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-6">
          <Card className="col-span-12 lg:col-span-3">
            <CardHeader>
              <CardTitle className='text-lg'>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-amber-600 text-white p-3 rounded-full">
                    <Scale />
                  </span>
                  <h2>Success Appointments</h2>
                </div>
              </CardTitle>
              <CardContent className='py-2 px-3'>
                <h3 className="text-xl md:text-3xl font-semibold">13</h3>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-12 lg:col-span-3">
            <CardHeader>
              <CardTitle className='text-lg'>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-rose-600 text-white p-3 rounded-full">
                    <ArrowUpDown />
                  </span>
                  <h2>Ongoing Appointment</h2>
                </div>
              </CardTitle>
              <CardContent className='py-2 px-3'>
                <h3 className="text-xl md:text-3xl font-semibold tabular-nums @[250px]/card:text-2xl">2</h3>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-12 lg:col-span-3">
            <CardHeader>
              <CardTitle className='text-lg'>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-teal-600 text-white p-3 rounded-full">
                    <Gavel />
                  </span>
                  <h2>Total Case</h2>
                </div>
              </CardTitle>
              <CardContent className='py-2 px-3'>
                <h3 className="text-xl md:text-3xl font-semibold tabular-nums @[250px]/card:text-2xl">1</h3>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-6">
          <Card className='col-span-12 lg:col-span-6'>
            <CardTitle>
              <CardHeader className='text-lg lg:text-xl'>Upcoming Appointment</CardHeader>
            </CardTitle>
            <CardContent>
              <div className="flex justfiy-start items-start gap-4">
                <div className="p-3 rounded-full bg-indigo-600 text-white">
                  <Gavel />
                </div>

                <div>
                  <p className="mb-1 text-lg">Date: 08 May 2025</p>
                  <p className="mb-1 text-lg">Lawyer: Rafsan Mehedi</p>
                  <p className="mb-1 text-lg">Case: Law Real-Estate</p>
                  <p className="mb-1 text-lg">Time: 11.00PM</p>
                </div>

              </div>
            </CardContent>
          </Card>
          <Card className='col-span-12 lg:col-span-6'>
            <CardTitle>
              <CardHeader className='text-lg md:text-xl'>Recent Message</CardHeader>
            </CardTitle>
            <CardContent>
              <div className="flex justfiy-start items-start gap-4">
                <div className="p-3 rounded-full bg-indigo-600 text-white">
                  <Gavel />
                </div>
                <div>
                  <p className="mb-1 text-lg">Rafsan Mehedi</p>
                  <p className="mb-1 text-lg">Time: 11.00PM</p>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
        {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} /> */}


      </div>
    </Dashboard>
  )
}
