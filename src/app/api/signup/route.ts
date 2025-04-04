import { runQuery } from "@/app/util/run-query";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const { email } = await req.json();
  console.log("BODY EMAIL", email);
  try {
    const result = await runQuery(`SELECT * FROM "public"."employees"`);
    return new NextResponse(
      JSON.stringify({ message: "success", data: result })
    );
  } catch (error) {
    console.error("Database error:", error); // Log full error in the server
    return new NextResponse(JSON.stringify({ message: "error", data: null }));
  }
}
