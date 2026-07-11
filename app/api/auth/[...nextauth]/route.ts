export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import NextAuth from 'next-auth';

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = (user as { accessToken?: string }).accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            (session as { accessToken?: string }).accessToken = token.accessToken as string | undefined;
            return session;
        },
    },
    providers: [
        {
            id: "connellboyce",
            name: "connellboyce.com",
            type: "oauth",
            version: "2.0",
            authorization: {
                url: "https://auth.connellboyce.com/oauth2/authorize",
                params: { response_type: "code", scope: "openid profile email urn:cb:scope:minecraft:server:state#read urn:cb:scope:minecraft:server:state#write" },
            },
            token: "https://auth.connellboyce.com/oauth2/token",
            userinfo: "https://auth.connellboyce.com/userinfo",
            wellKnown: "https://auth.connellboyce.com/.well-known/openid-configuration",
            issuer: "https://auth.connellboyce.com",
            clientId: "mc-dash",
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            profile(profile, tokens) {
                return {
                    id: profile.sub,
                    name: profile.username,
                    email: profile.email, // May be undefined
                    image: profile.picture, // May be undefined
                    accessToken: tokens.access_token,
                    idToken: tokens.id_token,
                };
            },
        },
    ],
});

export { handler as GET, handler as POST };