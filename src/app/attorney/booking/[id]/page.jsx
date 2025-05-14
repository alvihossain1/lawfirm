'use client'
import Dashboard from '@/app/dashboard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Download, SquareChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter()
    return (
        <Dashboard>
            <Button onClick={() => router.back()} className='mb-3'> <SquareChevronLeft /> Go Back</Button>
            <Card>
                <CardHeader>
                    <CardTitle>Client Info</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex gap-2 mb-3'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1>John</h1>
                            <h2>user@gmail.com</h2>
                        </div>
                    </div>
                    <div>
                           <p className='mb-3'>Phone: N/A</p>
                           <p className='mb-3'>Present Address: Khulna, Bangladesh</p>
                           <p>Permanent Address: Dhaka, Bangladash</p>
                           <p>Date Of Birth: 21 Jun 2000</p>
                           <p>Postal Code: 9000</p>
                           <p>Country: BD</p>
                        </div>
                    <Separator className='my-3' />
                    <div>
                        <p className='mb-3'>Case Information</p>
                        <p className='mb-3'>Case Type: Law Real-Estate</p>
                        <p className='mb-3'>Case Short Description: Dashboard Attorney My Cases Appointments Files Message Settings Help & Info</p>
                        <p className='mb-3'>Case_History: Dashboard Attorney My Cases Appointments Files Mes</p>                       
                        <p className='mb-3'>Case Status: <Badge variant="outline" className='border-2 border-green-600 text-green-600 font-bold'>Confirmed</Badge></p>
                    </div>
                    <Separator className='my-3' />
                    <div>
                        <h1 className='mb-3'>Booking Details</h1>
                        <p className='mb-3'>Date: 12 May 2025</p>
                        <p className='mb-3'>Time Slot: 10.00AM</p>
                        <p className='mb-3'>Create Date: 12 May 2025</p>
                    </div>
                    <Separator className='my-3' />
                    <div>
                        <h1 className='mb-3'>Evidence</h1>
                        <Button><Download/> Download Pdf</Button>
                    </div>
                </CardContent>
            </Card>
        </Dashboard>
    )
}
