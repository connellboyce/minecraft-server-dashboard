import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
    const baseUrl = process.env.SERVER_STATE_MANAGER_BASE_URL;
    const token = await getToken({ req });

    const response = await fetch(baseUrl + '/api/v2/server', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.accessToken}`,
        },
    });

    const result = await response.json();

    return NextResponse.json({
        up: result.minecraft.up,
        players: result.minecraft.players,
    });
}
