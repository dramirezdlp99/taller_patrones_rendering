// app/api/irrigation/route.ts
import { NextResponse } from 'next/server';

// Estado global simulado en memoria del servidor backend
let systemState = {
  moisture: 38,
  status: "Crítico",
  lastIrrigated: "Ninguna",
  waterCollectedLiters: 3850
};

export async function GET() {
  return NextResponse.json(systemState);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  if (body.action === "irrigate") {
    systemState.moisture = 85;
    systemState.status = "Óptimo";
    systemState.lastIrrigated = new Date().toLocaleTimeString();
    systemState.waterCollectedLiters -= 45;
  } else if (body.action === "reset") {
    systemState.moisture = 38;
    systemState.status = "Crítico";
  }

  return NextResponse.json({ success: true, state: systemState });
}