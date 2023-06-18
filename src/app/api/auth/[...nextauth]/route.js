
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs";
import User from "@/modal/User";
 
const handler=NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",

            async authorize(credentials){
                await connect()

                try{
                    const user= await User.find({
                        email: credentials.email 
                    })
                    if(user){
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                        if(isPasswordCorrect){
                            return user
                        }else{
                            throw new Error("Wrong Credentials")
                        }
                    }else{
                        throw new Error("User not found.")
                    }
                }catch(err){
                    throw new Error(err)
                }
            }
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ]
})

export {handler as GET, handler as POST}