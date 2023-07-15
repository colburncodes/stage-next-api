import { Job } from "@/app/models/job";
import { ConnectDB } from "@/config/db";
import { validateToken } from "@/utility/validateToken";
import { NextRequest, NextResponse } from "next/server";
ConnectDB();

export async function GET(req: NextRequest) {
  try {
    // add condition later to list all jobs based on the user
    const jobs = await Job.find();
    if (!jobs) {
      throw new Error("No jobs exist!");
    }
    return NextResponse.json({
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

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

export async function PUT(req: NextRequest) {
  try {
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
