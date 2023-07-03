//https://nextjs.org/docs/app/api-reference/functions/cookies
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: "Logout Successful" },
      { status: 200 }
    );
    // remove cookie
    response.cookies.set({
      name: "token",
      value: "",
      maxAge: 0,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
