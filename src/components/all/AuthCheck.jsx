'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function AuthCheck({children}) {

    const router = useRouter()
    const {data: session} = useSession()

    useEffect(() => {
        !session?.user && router.replace('/login')
    }, [session?.user])

  return (
    <div>{children}</div>
  )
}
