import { User } from "@/app/models/user";
import { ConnectDB } from "@/config/db";
import { validateToken } from "@/utility/validateToken";
import { NextRequest, NextResponse } from "next/server";
ConnectDB();

export async function GET(req: NextRequest) {
  try {
    // add condition later to list all jobs based on the user
    validateToken(req);
    const users = await User.find();
    console.log("api", users);
    return NextResponse.json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
