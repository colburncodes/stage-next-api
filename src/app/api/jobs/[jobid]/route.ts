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

export async function PUT(req: NextRequest, { params }: any) {
  try {
    validateToken(req);
    const reqBody = await req.json();
    const job = await Job.findByIdAndUpdate(params.jobid, reqBody, {
      new: true,
      runValidators: true,
    });

    if (!job) {
      throw new Error("No job found");
    }
    return NextResponse.json({
      message: "Job updated successfully",
      data: job,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  try {
    validateToken(req);
    const job = await Job.findByIdAndDelete(params.jobid);

    if (!job) {
      throw new Error("No job found");
    }
    return NextResponse.json({
      message: "Job deleted successfully",
      data: job,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
