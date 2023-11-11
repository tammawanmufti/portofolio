import { NextResponse } from "next/server";
import { projects } from "./data";

export async function GET() {
  return NextResponse.json({ data: projects }, { status: 200 });
}
