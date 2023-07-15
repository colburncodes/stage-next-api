import { Job } from "@/app/models/job";
import { ConnectDB } from "@/config/db";
import { validateToken } from "@/utility/validateToken";
import { NextRequest, NextResponse } from "next/server";
ConnectDB();

export async function POST(req: NextRequest) {
  try {
    const userId = await validateToken(req);
    const reqBody = await req.json();
    const job = await Job.create({ ...reqBody, user: userId });

    return NextResponse.json({
      message: "Job created successfully",
      data: job,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
