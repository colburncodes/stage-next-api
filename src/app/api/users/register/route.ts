import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/config/db";
ConnectDB();

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "users/register POST method accessed!" });
}
