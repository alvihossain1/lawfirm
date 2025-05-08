import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// var bcrypt = require('bcryptjs');

async function processLogin(loginData){
    const user = { name: 'Newaz Ben Alam', email: 'admin@gmail.com', image: '/admin.jpg', role: 'user' }
    const password = '123456'

    if(!user){
        throw new Error('No user found');
    }
    else if(user.email !== loginData.email){
        throw new Error("Email doesn't match");
    }
    else if(password !== loginData.password){
        throw new Error("Password doesn't match");
    }
    else if(password === loginData.password){
        return user
    }
    else{
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
    pages: {
        signIn: "/login",
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };