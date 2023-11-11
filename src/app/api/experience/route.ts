import { NextResponse } from "next/server";
import { experiences } from "./data";

export async function GET() {
  return NextResponse.json({ data: experiences }, { status: 200 });
}
