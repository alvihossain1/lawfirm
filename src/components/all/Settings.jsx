'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '../ui/input'


export default function Settings() {

    const { data: session } = useSession()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')

    function initUserDetails() {
        setName(session.user.name)
        setEmail(session.user.email)
    }

    useEffect(() => {
        session?.user && initUserDetails()
    }, [session])

    async function submitForm() {

    }

    async function submitPassword() {

    }

    async function submitImage() {

    }

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

                    <Tabs defaultValue="profile">
                        <TabsList>
                            <TabsTrigger value="profile">Profile</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                            <TabsTrigger value="image">Image</TabsTrigger>
                        </TabsList>
                        <TabsContent value="profile">
                            <div className='grid grid-cols-12 gap-4 lg:gap-6'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Full Name</Label>
                                    <Input onChange={(e) => setName(e.target.value)} value={name} />
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Email Address</Label>
                                    <Input onChange={(e) => setEmail(e.target.value)} value={email} type='email' />
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Date of birth</Label>
                                    <Input onChange={(e) => setDob(e.target.value)} value={dob} />
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Phone Number</Label>
                                    <Input onChange={(e) => setPhone(e.target.value)} value={phone} />
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Address</Label>
                                    <Input onChange={(e) => setAddress(e.target.value)} value={address} />
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Postal Code</Label>
                                    <Input onChange={(e) => setPostalCode(e.target.value)} value={postalCode} />
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Country</Label>
                                    <Input onChange={(e) => setCountry(e.target.value)} value={country} />
                                </div>
                                <div className='col-span-12'>
                                    <div>
                                        <Button onClick={() => submitForm()}>Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className='grid grid-cols-12 gap-4 lg:gap-6'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Password</Label>
                                    <Input onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div>
                                <div className='col-span-12'>
                                    <div>
                                        <Button onClick={() => submitPassword()}>Submit Password</Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="image">
                            <div className='grid grid-cols-12 gap-4 lg:gap-6'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <Label className='mb-1'>Upload Image</Label>
                                    <Input onChange={(e) => setImage(e.target.files[0])} type='file' />
                                </div>
                                <div className='col-span-12'>
                                    <div>
                                        <Button onClick={() => submitImage()}>Submit Image</Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>



                </CardContent>
            </Card>

        </div>
    )
}
