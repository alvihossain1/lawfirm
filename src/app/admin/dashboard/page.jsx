import React from 'react'
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { DollarSign, FileCheck2, FileClock, FileUser, Gavel, Shapes, Users } from "lucide-react"

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
import Dashboard from '@/app/dashboard'
import { LineChartComponent } from '@/components/admin/line-chart'
import { PieChartComponent } from '@/components/admin/pie-chart'

export default function Page() {
  return (
    <Dashboard>
      <div className="flex flex-1 flex-col">



        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-6">
          <Card className="col-span-12 lg:col-span-3">
            <CardHeader>
              <CardTitle className='text-lg'>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-fuchsia-600 text-white p-3 rounded-full">
                    <Users />
                  </span>
                  <h2>Total Attorney</h2>
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
                    <Shapes />
                  </span>
                  <h2>Total Clients</h2>
                </div>
              </CardTitle>
              <CardContent className='py-2 px-3'>
                <h3 className="text-xl md:text-3xl font-semibold">23</h3>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-12 lg:col-span-3">
            <CardHeader>
              <CardTitle className='text-lg'>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-indigo-600 text-white p-3 rounded-full">
                    <FileUser />
                  </span>
                  <h2>Total Cases</h2>
                </div>
              </CardTitle>
              <CardContent className='py-2 px-3'>
                <h3 className="text-xl md:text-3xl font-semibold tabular-nums @[250px]/card:text-2xl">5</h3>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-12 lg:col-span-3">
            <CardHeader>
              <CardTitle className='text-lg'>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-amber-600 text-white p-3 rounded-full">
                    <FileClock />
                  </span>
                  <h2>Ongoing Cases</h2>
                </div>
              </CardTitle>
              <CardContent className='py-2 px-3'>
                <h3 className="text-xl md:text-3xl font-semibold tabular-nums @[250px]/card:text-2xl">4</h3>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-12 lg:col-span-3">
            <CardHeader>
              <CardTitle className='text-lg'>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-emerald-600 text-white p-3 rounded-full">
                    <FileCheck2 />
                  </span>
                  <h2>Success Cases</h2>
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
                  <span className="bg-red-300 text-black p-3 rounded-full">
                    <DollarSign />
                  </span>
                  <h2>Wallet</h2>
                </div>
              </CardTitle>
              <CardContent className='py-2 px-3'>
                <h3 className="text-xl md:text-3xl font-semibold tabular-nums @[250px]/card:text-2xl">$22</h3>
              </CardContent>
            </CardHeader>
          </Card>
          <div className='col-span-12 lg:col-span-6'></div>
           <div className='col-span-12 lg:col-span-6'>
              <LineChartComponent />
          </div>
          <div className='col-span-12 lg:col-span-6'>
              <PieChartComponent />
          </div>

        </div>
        {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} /> */}


      </div>
    </Dashboard>
  )
}
