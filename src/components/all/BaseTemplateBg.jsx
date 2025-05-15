'use client'
import React from 'react'
import { useGlobal } from '../providers/GlobalProviders'

export default function BaseTemplateBg({children}) {

    const { bgImage } = useGlobal()

    return (
        <div>
            {bgImage === 'yes' ? (
                <div className="relative h-full">
                    <div className="absolute top-0 left-0 right-0 min-h-[55vh] bg-purple-200 dark:bg-neutral-100/10 bg-image" style={{ zIndex: 1 }}></div>
                    <div className="absolute w-full p-1 md:p-6" style={{ zIndex: 2 }}>
                        {children}
                    </div>
                </div>
            ) : (
                <div className="p-1 md:p-6">
                    {children}
                </div>
            )}

        </div>
    )
}
