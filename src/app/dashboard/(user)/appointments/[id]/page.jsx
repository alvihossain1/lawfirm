'use client'
import Dashboard from '@/app/dashboard/dashboard'
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
                    <CardTitle>Attorney Info</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex gap-2'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1>Rafsan Mehedi</h1>
                            <h2>Senior Lawyer</h2>
                        </div>
                    </div>
                    <Separator className='my-3' />
                    <div>
                        <p className='mb-3'>Email: attorney@gmail.com</p>
                        <p className='mb-3'>Phone: +8801786533455</p>
                        <p className='mb-3'>Experience: 3 years</p>
                        <div className='mb-3'>
                            <p>Qualifications:</p>
                            <p>
                                <span className='font-bold'>Juris Doctor (JD):</span> Earned from Cambridge University, specializing in Business and Tax Law.
                                <span className='font-bold'>Bar Admission:</span> Licensed to practice law under the Florida Bar Association.
                                <span className='font-bold'>Certified Mediator:</span> Trained in corporate conflict resolution and contract negotiation.
                                <span className='font-bold'>Continuing Legal Education (CLE):</span> Actively involved in seminars on financial compliance and business regulations.
                                <span className='font-bold'>Professional Memberships:</span> Member of American Bar Association, Florida Business Law Section, and Tax Professionals Network.
                            </p>
                        </div>
                        <p className='mb-3'>Case Status: <Badge variant="outline" className='border-2 border-green-600 text-green-600 font-bold'>Confirmed</Badge></p>
                    </div>
                    <Separator className='my-3' />
                    <div>
                        <h1 className='mb-1'>Case Info</h1>
                        <p className='mb-1'>Case Type: Law Family</p>
                        <p className='mb-1'>Case Short Description: dfgmdfgkjopsdfigopidfspogipodsfigpodfiopgidfopvikb pck;lbkoclfjkopgifdgopiofpcvigpoidfpogifdiopgfdipo</p>
                        <p className='mb-1'>Case History: dfgmdfgkjopsdfigopidfspogipodsfigpodfiopgidfopvikb</p>
                        <p className='mb-1'>Appointment: 10 May 2025 - 1.01PM</p>
                        <div className='mb-1 py-2'>
                            <p className='mb-1'>Evidence:</p>
                            <Button><Download /> Download</Button>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </Dashboard>
    )
}
