'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { signIn, useSession } from 'next-auth/react'
import { Button } from '../ui/button'

export default function LoginComponent() {

    const { data: session, status } = useSession()
    const router = useRouter()
    const [email, setEmail] = useState('user@gmail.com')
    const [password, setPassword] = useState('123456')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (status === 'authenticated' && session?.user?.role) {
            if (session.user.role === 'user') {
                router.replace('/users/dashboard');
            } else if (session.user.role === 'attorney') {
                router.replace('/attorney/dashboard');
            } else if (session.user.role === 'admin') {
                router.replace('/admin/dashboard');
            } else {
                console.log("Unknown Role");
            }
        } else if (status === 'authenticated' && !session?.user?.role) {
            console.log("User authenticated but role not found in session.");
            // Optionally redirect to a default dashboard or handle the error
            router.replace('/login'); // Example fallback
        }
    }, [session?.user?.role, status, router]);

    async function handleSubmit() {
        // ... your handleSubmit logic using signIn ...
        try {
            setLoading(true);
            const response = await signIn("credentials", {
                email: email,
                password: password,
                redirect: false,
            });
            if (response?.error) {
                toast(response.error);
            }
            setLoading(false);
            // After successful sign-in, the useEffect hook will handle redirection based on the session
        } catch (error) {
            toast(error)
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4 flex gap-2">
                <Button onClick={() => {setEmail('user@gmail.com')}}>User</Button>
                <Button onClick={() => {setEmail('attorney@gmail.com')}}>Attorney</Button>
                <Button onClick={() => {setEmail('admin@gmail.com')}}>Admin</Button>
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input onChange={e => setEmail(e.target.value)} value={email} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input onChange={e => setPassword(e.target.value)} value={password} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div className="mt-8">
                <button onClick={() => handleSubmit()} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                    {!loading ? 'Login' : 'Please wait...'}</button>
            </div>
        </div>
    )
}
