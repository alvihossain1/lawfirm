import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
    const session = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    const pathname = request.nextUrl.pathname;

    try {

        if (!session?.email) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
        const role = session.role;

        const isUserRoute = pathname.startsWith('/users');
        const isAttorneyRoute = pathname.startsWith('/attorney');
        const isAdminRoute = pathname.startsWith('/admin');

        if (role === 'user' && !isUserRoute) {
            return NextResponse.redirect(new URL('/users/dashboard', request.url)); // Redirect user to their dashboard
        }

        if (role === 'attorney' && !isAttorneyRoute) {
            return NextResponse.redirect(new URL('/attorney/dashboard', request.url)); // Redirect attorney to their dashboard
        }

        if (role === 'admin' && !isAdminRoute) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url)); // Redirect admin to their dashboard
        }

        // If the user has a valid token and is trying to access their allowed route, let them proceed
        return NextResponse.next();

    } catch (error) {
        // Handle invalid token (optional: log the error)
        console.error("Error decoding token:", error);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ["/users/:path*", "/attorney/:path*", "/admin/:path*"],
};