import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
    const baseUrl = process.env.SERVER_STATE_MANAGER_BASE_URL;
    const token = await getToken({ req });

    const response = await fetch(baseUrl + '/api/v2/server', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token?.accessToken}`,
        },
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error('Server state manager error:', response.status, {
            body: errorBody,
            wwwAuthenticate: response.headers.get('www-authenticate'),
        });
        return NextResponse.json({ error: 'Failed to fetch server status' }, { status: response.status });
    }

    const result = await response.json();

    return NextResponse.json({
        up: result.minecraft.up,
        players: result.minecraft.players,
    });
}
