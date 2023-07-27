import { Job } from "@/app/models/job";
import { ConnectDB } from "@/config/db";
import { validateToken } from "@/utility/validateToken";
import { NextRequest, NextResponse } from "next/server";
ConnectDB();

export async function GET(req: NextRequest) {
  try {

    validateToken(req);
    const { searchParams } = new URL(req.url);
    const user = searchParams.get("user");
    const filter: any = {};

    if (user) {
      filter["user"] = user;
    }

    const jobs = await Job.find(filter);

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
