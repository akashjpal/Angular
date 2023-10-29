"use client";
import React, { ReactNode, useEffect, useState } from "react";
import useAuth from "@/context/useAuth";
import { AuthProvider } from "@/context/authContext";
import axios from "axios";

export default function RootLayout({ children }:{ children: ReactNode }) {
  interface ApiResponse {
    status: string;
    authStatus: boolean;
    message: string;
  }
  const [authStatus,setAuthStatus] = useState(false);

  useEffect(() => {
    const response = async () => {
      const res = await axios.get("/api/users/auth");
      console.log("res: ",res);
      if(res.data.authStatus){
        setAuthStatus(true);
      }
    }
    response();
  },[]);
  console.log("AuthStatus: ",authStatus);
  
  return (
    <AuthProvider value={{authStatus,setAuthStatus}}>
    <html lang="en">
            <body>{children}</body>
    </html>
    </AuthProvider>
  )
};
