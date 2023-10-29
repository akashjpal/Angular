import { NextRequest, NextResponse } from "next/server";
import { connectDB, disconnectDB } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        // Check if a user with the provided email or username already exists
        const existingUser = await User.findOne({
            $or: [{ email: email }, { name: username }],
        });

        if (existingUser) {
            await disconnectDB();
            return NextResponse.json({
                status: 400,
                message: "User already exists",
            });
        }

        // Hash the password before saving it
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new User document and save it to the database
        const newUser = new User({
            name: username,
            email: email,
            password: hashedPassword,
        });
        await newUser.save();

        await disconnectDB();

        return NextResponse.json({
            status: 200,
            message: "User created successfully",
        });
    } catch (err) {
        console.error(err);
        await disconnectDB();

        return NextResponse.json({
            status: 400,
            message: "An error occurred while creating the user",
        });
    }
}
