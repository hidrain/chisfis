import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // GithubProvider({
        // clientId: process.env.GITHUB_ID,
        // clientSecret: process.env.GITHUB_SECRET,
        // }),


        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.


            credentials: {
                email: {label: "Username", type: "email", placeholder: "User mail"},
                password: {label: "Password", type: "password"}
            },

            async authorize(credentials, req) {
                console.log(credentials)

                let user = await prisma.users.findFirst({
                    where: {
                        email: credentials.email,
                        password: credentials.password,
                    }
                })

                if (!user) user = await prisma.users.findFirst({
                    where: {
                        username: credentials.email,
                        password: credentials.password,
                    }
                })
                console.log(user)
                //const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return {id: user.id, name: user.username, email: {email: user.email, uuid: user.uuid, roles: user.roles} }
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })


        // ...add more providers here
    ],
    pages: {
        signIn: '/account/login',
        error: '/account/loginerr',
    },


}

export default NextAuth(authOptions)