import mongoose from "mongoose";

export async function connectDB() {
    try{
        console.log(">> Connecting to DB");
        const response = await mongoose.connect(process.env.MONGODB_URI!);
        // console.log(response);
        console.log(">> Connected to DB");
    }catch(err:any){
        console.log(err);
    }
}

export async function disconnectDB() {
    try{
        const response = await mongoose.disconnect();
        console.log(">> Disconnected from DB");
    }catch(err:any){
        console.log(err);
    }
}