import { NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export function middleware(request){
    // const cookies = request.cookies.getAll()
    const token = request.cookies.get('next-auth.session-token')
    if(!token){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = { matcher: ["/dashboard/:path*"] }