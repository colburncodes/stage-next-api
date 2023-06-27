import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/config/db";
import { User } from "../../../models/user";
import bcrypt from "bcrypt";

ConnectDB();

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();
    const { name, email, password } = request;

    const user = await User.findOne({ email });

    if (user) {
      throw new Error("User already exist!");
    }

    return bcrypt.hash(password, 10).then((hash) =>
      User.create({ name, email, password: hash }).then((user) => {
        return NextResponse.json(
          { message: "User created successfully" },
          { status: 201 }
        );
      })
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
