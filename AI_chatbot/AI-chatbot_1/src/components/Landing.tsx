import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Home(props:any) {
  const { setDark, darkMode } = props;

  return (
    <div className="container-fluid text-center">
      <div className="row vh-100">
        <div className="col-lg-7 col-md-12 left--side ps-3 text-start">
          <span className='left--heading'>InterviewBOT-X</span>
          <p>This is an InterviewBOT-X</p>
        </div>
        <div className="col right--side">
          <h3 className='mb-3'>Get started</h3>
          <div className="d-grid gap-4 d-md-block">

            <Link href="/Login">
            <button className="btn col-lg-4 col-sm-6 col-md-3 p-2 btn-primary m-2" type="button">
              Login
            </button>
            </Link>

            <Link href="/Signup">
            <button className="btn col-lg-4 col-sm-6 col-md-3 p-2 btn-primary m-2" type="button">
              Signup
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
