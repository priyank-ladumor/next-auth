import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions)

    if(!session?.user){
        return NextResponse.json({error: "Not Authorized"}, {status: 400})
    }

    return NextResponse.json({session}, {status: 200})
}