import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function POST(req: NextRequest) {
    const baseUrl = process.env.SERVER_STATE_MANAGER_BASE_URL;
    const token = await getToken({ req });

    const response = await fetch(baseUrl + '/api/v2/server', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.accessToken}`,
        },
        body: JSON.stringify({ up: true }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        const wwwAuthenticate = response.headers.get('www-authenticate');
        console.error('Server state manager error:', response.status, { body: errorBody, wwwAuthenticate });
        const errorResponse = NextResponse.json({ error: 'Failed to start server' }, { status: response.status });
        if (wwwAuthenticate) {
            errorResponse.headers.set('www-authenticate', wwwAuthenticate);
        }
        return errorResponse;
    }

    const result = await response.json();

    return NextResponse.json({
        up: result.minecraft.up,
        players: result.minecraft.players,
    });
}
