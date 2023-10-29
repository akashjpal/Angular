import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/landing.css";

export default function Home_R(){
    const [input,setInput] = useState("");
    console.log(input);

    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className='input-group home_r'>
                        <input type="text" className="form-control" value={input} placeholder="Enter your question" onChange={(e)=>{setInput(e.target.value)}} aria-describedby="button-addon2" autoFocus/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}