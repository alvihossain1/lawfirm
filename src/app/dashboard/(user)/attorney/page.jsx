import React from 'react'
import Dashboard from '../../dashboard'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'


export default function page() {

    const arr = [1, 3, 4, 5]
    return (
        <Dashboard>
            <div className='grid grid-cols-12 gap-3 md:gap-6'>
                {arr.map((val, index) => (
                    <Card key={index} className='col-span-12 lg:col-span-4'>
                        <CardTitle>
                            <div className='flex gap-2'>
                                <CardHeader>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <h2 className='text-lg md:text-2xl'>Samuel</h2>
                                </CardHeader>
                            </div>
                        </CardTitle>
                        <CardContent>
                            <p>Experience :5</p>
                            <p>Biography:</p>
                            <p>Experienced attorney with expertise in criminal an...</p>
                        </CardContent>
                        <CardFooter>
                            <div className='w-full flex justify-between items-center'>
                                <Button>Book Now</Button>
                                <h3 className='text-lg'>$150</h3>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Dashboard>
    )
}
