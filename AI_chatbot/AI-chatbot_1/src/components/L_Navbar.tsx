import {useState,useEffect} from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/landing.css";

export default function Navbar(props:any){
    
    return (
        <nav className="navbar position-absolute">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">InterviewBOT-X •</span>
        </div>
        </nav>
    )
};