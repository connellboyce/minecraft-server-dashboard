import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: '/api/auth/signin/connellboyce',
    },
    callbacks: {
        authorized: ({ token }) => {
            return !!token;
        },
    },
});

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|api/auth).*)',
    ],
};

