import React from 'react'
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
import Dashboard from '@/app/dashboard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
                <h3 className="text-xl md:text-3xl font-semibold">20</h3>
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
                <h3 className="text-xl md:text-3xl font-semibold tabular-nums @[250px]/card:text-2xl">15</h3>
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
                <h3 className="text-xl md:text-3xl font-semibold tabular-nums @[250px]/card:text-2xl">15</h3>
              </CardContent>
            </CardHeader>
          </Card>
          <div className='col-span-12 lg:col-span-3'></div>
          <Card className='col-span-12 lg:col-span-6'>
            <CardTitle>
              <CardHeader className='text-lg lg:text-xl'>Appointment Overview</CardHeader>
            </CardTitle>
            <CardContent>
              <div className="flex justfiy-start items-start gap-4">

                <div>
                  <p className="mb-1 text-lg">Total: 10</p>
                  <p className="mb-1 text-lg">Success: 10</p>
                  <p className="mb-1 text-lg">Ongoing: 10</p>
                </div>

              </div>
            </CardContent>
          </Card>
          <Card className='col-span-12 lg:col-span-6'>
            <CardTitle>
              <CardHeader className='text-lg md:text-xl'>Upcoming Appointments</CardHeader>
            </CardTitle>
            <CardContent>
              <div className="flex justfiy-start items-start gap-4">
                <p>No upcoming appointments</p>
              </div>
            </CardContent>
          </Card>
          <Card className='col-span-12 lg:col-span-6'>
            <CardTitle>
              <CardHeader className='text-lg md:text-xl'>Clients</CardHeader>
            </CardTitle>
            <CardContent>
              <div className="">
                <div className='flex gap-3 mb-3'>
                  <Avatar>
                    <AvatarImage src='https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg' alt="user profile" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>2 cases</p>
                </div>
                <div className='flex gap-3 mb-3'>
                  <Avatar>
                    <AvatarImage src='https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg' alt="user profile" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>4 cases</p>
                </div>
                <div className='flex gap-3 mb-3'>
                  <Avatar>
                    <AvatarImage src='https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg' alt="user profile" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>13 cases</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Dashboard>
  )
}
