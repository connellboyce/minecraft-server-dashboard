import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = process.env.SERVER_STATE_MANAGER_BASE_URL;
    const response = await fetch(baseUrl + '/status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();

    return NextResponse.json(result);
}