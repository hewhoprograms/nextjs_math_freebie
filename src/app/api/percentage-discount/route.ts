import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const percent: number = Number(req.nextUrl.searchParams.get("percent"));
  const price: number = parseFloat(req.nextUrl.searchParams.get("total")!);
  const result = Math.floor(price - price * (percent / 100));
  return NextResponse.json({ percent, price, result });
}

export async function POST(req: NextRequest) {

  const formData = req.formData();
  const price = Number((await formData).get('price'));
  const percent = Number((await formData).get('percent'));
  const result = Math.floor(price - price * (percent / 100));

  return NextResponse.json({ result });
}

