import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/config/db";
import { User } from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

ConnectDB();

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();
    const user = await User.findOne({ email: request.email });

    if (!user) {
      throw new Error("User does not exist!");
    }

    // compare passwords
    const validPassword = await bcrypt.compare(request.password, user.password);

    if (!validPassword) {
      throw new Error("Invalid email or password!");
    }

    const payload = {
      _id: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      { message: "Login Successful" },
      { status: 200 }
    );

    // set cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000, // 1Day
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
