import { NextRequest, NextResponse } from "next/server";
import PocketBase from 'pocketbase';

export async function POST(request: NextRequest) {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const data = await request.json();
    console.log(data);

/*     const data = {
        "username": "test_username",
        "email": "test@example.com",
        "emailVisibility": true,
        "password": "12345678",
        "passwordConfirm": "12345678",
        "name": "test"
    }; */
    try {
        const record = await pb.collection('users').create(data!);
        return NextResponse.json({
            status: "200",
            record
        });
    } catch (error) {
        return NextResponse.json({
            status: "400",
            error
        });
    }

}