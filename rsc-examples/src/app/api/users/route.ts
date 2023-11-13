import { NextResponse } from "next/server";
import { addUser, getUsers } from "../../../../db/db";
export async function GET() {
  const users = await getUsers();

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const user = await request.json();

  await addUser(user);

  return NextResponse.json({
    message: "User added",
  });
}
