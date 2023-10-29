import User from "@/models/User";
import { connectDB, disconnectDB } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request:NextRequest){ 
    try{
        await connectDB();
        const reqBody = await request.json();
        console.log(reqBody);
        const {email,password} = reqBody;
        const user = await User.findOne({email:email});
        if(!user){
            return NextResponse.json({
                "status":400,
                "message":"User not found"
            });
        }
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return NextResponse.json({
                "status":400,
                "message":"Invalid credentials"
            });
        }
        // jwt.sign(payload, secretOrPrivateKey, [options, callback]);
        const payload = {
            id:user._id,
            username:user.username
        }
        const secretOrPrivateKey = process.env.JWT_SECRET!;
        const tokenFeedback =  jwt.sign(payload,secretOrPrivateKey,{expiresIn:"7d"});
        console.log(tokenFeedback);

        const response =  NextResponse.json({
            "status":200,
            "message":"Logged in successfully"
        });
        response.cookies.set('token',tokenFeedback,{
            httpOnly:true
        });
        await disconnectDB();
        return response;
    }catch(err:any){
        console.log(err);
    }
}
