import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// var bcrypt = require('bcryptjs');

async function processLogin(loginData) {
    const users = [
        { name: 'Newaz Ben Alam', email: 'user@gmail.com', image: '/admin.jpg', role: 'user', password: '123456' },
        { name: 'Jordan Max', email: 'attorney@gmail.com', image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D', role: 'attorney', password: '123456' },
        { name: 'Sierra Peach', email: 'admin@gmail.com', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCiFg3WKJJD9wl2z94g3-1oEAJ-Baul_GCw&s', role: 'admin', password: '123456' },
    ]

    let user = users.filter((user) => user.email === loginData.email)
    user = user[0]
    if (!user) {
        throw new Error('No user found');
    }
    else if (user.email !== loginData.email) {
        throw new Error("Email doesn't match");
    }
    else if (user.password !== loginData.password) {
        throw new Error("Password doesn't match");
    }
    else if (user.password === loginData.password) {
        const {name, email, image, role} = user
        return {name, email, image, role}
    }
    else {
        throw new Error("There was a problem");
    }

}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const loginData = { email: credentials.email, password: credentials.password, role: credentials.role };
                return processLogin(loginData)
            },
        })
    ],
    callbacks: {
        async jwt({ token, user, session }) {
            // console.log("JWT Callback:: ", {token, user, session});
            if (user) {
                return {
                    ...token,
                    userId: user.userId,
                    module: user.module,
                    role: user.role,
                };
            }
            return token;
        },
        async session({ session, token, user }) {
            // console.log("Session Callback:: ", {user, session});
            return {
                ...session,
                user: {
                    ...session.user,
                    userId: token.userId,
                    module: token.module,
                    role: token.role,
                }
            };
        },

    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    // cookies: {
    //     sessionToken: {
    //         name: "tokenx",
    //         options: {
    //             httpOnly: true,
    //             sameSite: "lax",
    //             secure: process.env.NODE_ENV === "production", // or true if using HTTPS in development
    //             path: "/",
    //         },
    //     },
    //     // Define other cookies if needed (e.g., callbackUrl, csrfToken, etc.)
    // },
    pages: {
        signIn: "/login",
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };