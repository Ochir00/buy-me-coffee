import { Usergetdata } from "@/app/back-end/userdata";

export async function GET() {
  const data = await Usergetdata();
  return new Response("wiwiwi");
}
export async function POST(req: Request) {
  const { messages } = await req.json();
  const data = await Usergetdata();
  return new Response(JSON.stringify({ messages, data }), {
    headers: { "Content-Type": "application/json" },
  });
}
export async function PUT(req: Request) {
  const { id, updateData } = await req.json();

  const updatedData = { id, ...updateData }; // Mock update logic
  return new Response(
    JSON.stringify({ message: "Data updated successfully", updatedData }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
export async function DELETE(req: Request) {
  const { id } = await req.json();
  return new Response(
    JSON.stringify({ message: `Data with id ${id} deleted successfully` }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
