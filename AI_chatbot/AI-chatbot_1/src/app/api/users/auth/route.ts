import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    if (req.cookies.get("token")) {
      return NextResponse.json({
        status: "success",
        authStatus: true,
        message: "User is logged in",
      });
    }else{
        return NextResponse.json({
            status: "success",
            authStatus: false,
            message: "User is not logged in",
          });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "error",
      authStatus: false,
      message: "Something went wrong",
    });
  }
}
