"use client"
import { useSession } from 'next-auth/react';
import React from 'react';
const Dashboard = () => {
    const session= useSession()
    return (
        <div>
            <h1>This is Dashboard.</h1>
            {
                console.log(session)
            }
        </div>
    );
};

export default Dashboard;