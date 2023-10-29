import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    name:{
        "type":String,
        "required":[true,"Name is required"],
        "unique":true,
        "trim":true,
    },
    email:{
        "type":String,
        "required":[true,"Email is required"],
        "unique":true,
        "trim":true,
    },
    password:{
        "type":String,
        "required":[true,"Password is required"],
        "trim":true,
    },
    isVerified:{
        "type":Boolean,
        "default":false,
    },
    fogotPasswordToken:{
        "type":String,
    },
    fogotPasswordExpires:{
        "type":Date,
    },
    verificationToken:{
        "type":String,
    },
    verificationExpires:{
        "type":Date,
    }
})

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;
