import { Job } from "@/app/models/job";
import { ConnectDB } from "@/config/db";
import { validateToken } from "@/utility/validateToken";
import { NextRequest, NextResponse } from "next/server";
ConnectDB();

export async function GET(req: NextRequest, { params }: any) {
  try {
    validateToken(req);
    const job = await Job.findById(params.jobid);
    return NextResponse.json({
      message: "Job fetched successfully",
      data: job,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 404 });
  }
}
