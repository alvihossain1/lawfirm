import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import Dashboard from '@/app/dashboard'
import { CalendarComponent } from '@/components/attorney/CalenderComponent'


export default function page() {


    return (
        <Dashboard>
            <div className='grid grid-cols-12 gap-3 md:gap-6'>
                <Card className='col-span-12 lg:col-span-4'>
                    <CardTitle>
                        <CardHeader>Availability</CardHeader>
                    </CardTitle>
                    <CardContent>
                        <CalendarComponent />
                    </CardContent>
                </Card>
            </div>
        </Dashboard>
    )
}
