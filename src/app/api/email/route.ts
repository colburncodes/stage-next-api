import EmailTemplate from "@/components/Email";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(req: NextRequest) {
  try {
    const response = await req.json();
    const { email } = response.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["colburnsanders@gmail.com"],
      subject: "DEVSYNC. Welcomes You!",
      react: EmailTemplate(email),
    });

    return NextResponse.json({ message: "Email Sent!" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
