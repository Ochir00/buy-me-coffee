import { runQuery } from "@/app/util/run-query";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request): Promise<NextResponse> {
  const { email, password, username } = await req.json();
  console.log(email, password, username);
  const createdAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();
  if (!email || !password || !username) {
    return new NextResponse(JSON.stringify({ message: "Missing fields" }), {
      status: 400,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await runQuery(
      `INSERT INTO "User" (email, password, username ) 
       VALUES ($1, $2, $3 ) RETURNING *;`,
      [email, hashedPassword, username]
    );
    return new NextResponse(
      JSON.stringify({ message: "success", data: result })
    );
  } catch (error) {
    console.log("Database error:", error); // Log full error in the server
    return new NextResponse(JSON.stringify({ message: "error", data: null }));
  }
}
