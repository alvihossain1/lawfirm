import { NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export function middleware(request){
    const cookies = request.cookies.getAll()
    console.log('Cookies', cookies)
    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = { matcher: "/dashboard" }