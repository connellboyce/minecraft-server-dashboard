import { NextResponse } from 'next/server';

export async function POST() {
    const baseUrl = process.env.SERVER_STATE_MANAGER_BASE_URL;
    const response = await fetch(baseUrl + '/start', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const result = await response.text();

    return NextResponse.json({message: result});
}