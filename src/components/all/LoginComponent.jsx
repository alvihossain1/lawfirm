'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'

export default function LoginComponent() {


    const router = useRouter()
    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('123456')
    const [loading, setLoading] = useState(false)

    async function handleSubmit() {

        if (!email || !password) {
            toast('Please enter email and password')
            return
        }

        try {
            setLoading(true);
            const response = await signIn("credentials", {
                email: email,
                password: password,
                redirect: false,
            });
            if (response?.status === 200) {
                router.replace("/dashboard");
                setLoading(false);
            }
            else {
                toast(response?.error);
                setLoading(false);
            }
        }
        catch (error) {
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
