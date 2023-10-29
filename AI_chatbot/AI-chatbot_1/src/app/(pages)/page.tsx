"use client";
import React from 'react';
import Landing from "@/components/Landing";
import Navbar from "@/components/L_Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '@/context/useAuth';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const {authStatus,setAuthStatus} = useAuth();
    console.log("AuthStatus: ",authStatus);
    if(authStatus){
        router.replace("/Home");
        return <></>;
    }
    return (
    
        <div className='mx-auto'>
            <Navbar/>
            <Landing/>
        </div>
    )
}