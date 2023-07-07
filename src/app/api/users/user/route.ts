import { User } from "@/app/models/user";
import { ConnectDB } from "@/config/db";
import { validateToken } from "@/utility/validateToken";
import { NextRequest, NextResponse } from "next/server";
ConnectDB();

export async function GET(req: NextRequest) {
  try {
    const userId = await validateToken(req);
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throw new Error("User not found!");
    }
    return NextResponse.json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const userId = await validateToken(req);
    const requestBody = await req.json();

    const user = await User.findByIdAndUpdate(userId, requestBody, {
      new: true,
    }).select("-password");

    if (!user) {
      throw new Error("No user found");
    }

    return NextResponse.json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

