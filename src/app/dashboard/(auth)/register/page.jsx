"use client"
import React from 'react';
import {useState} from "react"
import { useRouter } from "next/navigation";

const Register = () => {
    const router=useRouter()
    const [error,setError]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const name=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value

        try{
            const res= await fetch("/api/auth/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    name,email,password
                })
            })
            res.status === 201 && router.push("/dashboard/login?success=Account has been created")
        }catch(err){
            setError(err)
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Form For Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="username" />
                <input type="email" />
                <input type="password" />
                <button type="submit">Submit Form</button>
                {error && <h3>{error}</h3> }
            </form>
        </div>
    );
};

export default Register;