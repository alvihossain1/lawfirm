'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function AuthCheck({children}) {

    const {data: session} = useSession()

  return (
    <div>
      {session?.user && children}
    </div>
  )
}


{/* <div className='dark:bg-neutral-900 dark:text-neutral-200 min-h-screen flex justify-center items-center'>
          <h1 className='text-lg md:text-xl'>Please wait</h1>

        </div> */}