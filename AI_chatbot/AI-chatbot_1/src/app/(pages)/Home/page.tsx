"use client";
import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home_R from '@/components/Home_R';
import Home_L from '@/components/Home_L';

export default function Home(){
    return (
        <div className='container-fluid'>
            <div className='row vh-100'>
                <div className='col-2 bg-dark-subtle'>
                    <Home_L/>
                </div>
                <div className='col bg-success-subtle'>
                    <Home_R/>
                </div>
            </div>
        </div>
    )
}