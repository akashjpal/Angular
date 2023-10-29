import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useAuth from '@/context/useAuth';

function SignupComponent(){
    const {authStatus,setAuthStatus} = useAuth();
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const router = useRouter();
    const [user,setUser] = useState({
        username:'',
        email:'',
        password:''
    });

    const [loading,setLoading] = useState(false);
    const [disable,setDisable] = useState(true);

    async function onSignup(){
        try{
            setLoading(true);
            setDisable(true);
            const response = await axios.post('/api/users/signup',user);
            console.log(response);
            setAuthStatus(true);
            router.replace('/Login');
        }catch(err:any){
            console.log("Error re bhava !!")
            console.log(err);
        }finally{
            setLoading(false);
            setUser({
                username:'',
                email:'',
                password:''
            });
        }
    }

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.username.length >0){
            setDisable(false);
        }
    },[user]);

    return(
        <div className='d-grid gap-4 d-md-block'>
        <div className='position-absolute top-50 start-50 translate-middle col-md-6 col-sm-6'>
            <h1 className='text-center'>
                Sign Up
            </h1>
            <div className="form-floating mb-3 ">
            <input type="text" name="username" className="form-control" value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}} id="floatingUsername" placeholder="Username"/>
            <label htmlFor="floatingUsername">Username</label>
            </div>
            <div className="form-floating mb-3">
            <input type="email" name="email" className="form-control" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value })}}   id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
            <input type="password" name="password" className="form-control" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value })}}   id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-primary col-sm-3" disabled={disable} onClick={onSignup}>
                {loading ? "Signing up..." : "Signup"}
                </button>
            </div>
            <div className='d-flex justify-content-center m-3'>
                Already have an account?
                <Link  href='/Login' className='mx-2'>
                Login
                </Link>
            </div>
            </div>
        </div>
    )
}

export default SignupComponent;