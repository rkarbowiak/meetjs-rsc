import { NextRequest, NextResponse } from "next/server";
import { addUser, getUsers } from "../../../../db/db";
import { NextApiRequest } from "next";

export async function GET() {
  const users = await getUsers();

  return NextResponse.json(users);
}

export async function POST(request: NextApiRequest) {
  const user = request.body;

  await addUser(user);

  return NextResponse.json({
    message: "User added",
  });
}
