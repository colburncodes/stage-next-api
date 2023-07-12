import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const validateToken = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      throw new Error("No token found!");
    }
    const userToken: any = await jwt.verify(token, process.env.JWT_SECRET!);
    return userToken._id;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
