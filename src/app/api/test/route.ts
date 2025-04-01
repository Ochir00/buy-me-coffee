import { NextResponse } from "next/server";
import { runQuery } from "@/app/util/run-query";
// export async function GET() {
//   const data = await Usergetdata;
//   return new Response(JSON.stringify(data), {
//     headers: { "Content-Type": "application/json" },
//   });
// }
// export async function POST(req: Request) {
//   const NewUser = await req.json();
//   console.log(NewUser);
//   const data = await Usergetdata.push(NewUser);
//   return new Response(JSON.stringify({ NewUser, data }), {
//     headers: { "Content-Type": "application/json" },
//   });
// }

// export async function PUT(req: Request) {
//   const { id, name } = await req.json();
//   const user = await Usergetdata.find((user: any) => user.id === id); // Mock logic to find user
//   if (user) {
//     user.name = name;
//     return new Response(JSON.stringify(user), {
//       headers: { "Content-Type": "application/json" },
//     });
//   } else {
//     return new Response(JSON.stringify({ message: "User not found" }), {
//       status: 404,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
// export async function DELETE(req: Request) {
//   const { id } = await req.json();
//   const userIndex = Usergetdata.findIndex((user: any) => user.id === id); // Mock logic to find user index
//   if (userIndex !== -1) {
//     const deletedUser = Usergetdata.splice(userIndex, 1); // Remove user from the array
//     return new Response(JSON.stringify(deletedUser[0]), {
//       headers: { "Content-Type": "application/json" },
//     });
//   } else {
//     return new Response(JSON.stringify({ message: "User not found" }), {
//       status: 404,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

export async function GET(): Promise<NextResponse> {
  try {
    const incomingName = "boldo";
    // const createTable = `CREATE TABLE "public"."Food" ("id" integer PRIMARY KEY,"name" varchar NOT NULL,"price" integer);`;
    const getUser = `SELECT name,password FROM "User" WHERE name='${incomingName}' AND password='1235';`;

    const user = await runQuery(getUser);
    if (user.length <= 0) {
      return new NextResponse(JSON.stringify({ error: "user not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ foods: user }));
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
    });
  }
}
