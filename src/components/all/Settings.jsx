'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

export default function Settings() {

    const { data: session } = useSession()
    return (
        session?.user &&
        <div>
            <Card>
                <CardHeader>
                    <Avatar>
                        <AvatarImage src={session?.user.image} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardHeader>
                    <CardTitle>{session?.user.name}</CardTitle>
                    <CardTitle>{session?.user.email}</CardTitle>
                    <CardDescription>Type: {session?.user.role}</CardDescription>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
                <CardFooter>
                    <Button>Update</Button>
                </CardFooter>
            </Card>

        </div>
    )
}
