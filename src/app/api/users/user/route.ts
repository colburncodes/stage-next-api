import { User } from "@/app/models/user";
import { validateToken } from "@/utility/validateToken";
import { NextRequest, NextResponse } from "next/server";

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
