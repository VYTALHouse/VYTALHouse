import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  payload: z.any().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    schema.parse(body);
    
    // Prototype only: no live DB connections unless VYTAL_ENABLE_FIREBASE is true
    // Log audit event
    const auditEvent = {
      id: `audit-${Date.now()}`,
      entity: "VYTAL House",
      type: "audit-event",
      name: `readiness-score POST interaction`,
      status: "logged",
      owner: "system",
      updatedAt: new Date().toISOString(),
      metadata: { action: "readiness-score" }
    };

    return NextResponse.json({ success: true, message: "Prototype logged.", audit: auditEvent }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Validation failed." }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, message: "readiness-score endpoint reachable." }, { status: 200 });
}
