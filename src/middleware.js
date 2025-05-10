import { NextResponse } from "next/server"
import { jwtDecode } from "jwt-decode"

export { default } from "next-auth/middleware"

export function middleware(request){
    // const cookies = request.cookies.getAll()
    const tokenObject = request.cookies.get('tokenx')
    if(!tokenObject?.value){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = { matcher: ["/dashboard/:path*"] }