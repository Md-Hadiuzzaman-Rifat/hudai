import { NextResponse } from "next/server" 
// used only in api routes

//--- api should be under app component.

[...NextAuth].js
// error page handle 
// pages: {
//     error: "/dashboard/login",
// }
// export {handler as GET, handler as POST}

bcrypt.js 
// node file e password change kora lagbe

Router.js 
// export const POST=async (request)=>{ 
//     const {name, email, password}=await request.json()

//     await connect()
//     const hashPassword=await bcrypt.hash(password, 5)
//     const newUser= new User({
//         name,email,password:hashPassword
//     })

//     try{
//         await newUser.save()
//         return new NextResponse("User has created",{
//             status:201
//         })
//     }catch(err){

//     }
// }

credentials
// signIn("credentials", {
//     email,
//     password,
//   });
// };



// const user=new User({
// })
// user.save()