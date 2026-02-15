export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/((?!api/auth|_next|stats/version|favicon.ico).*)"],
};