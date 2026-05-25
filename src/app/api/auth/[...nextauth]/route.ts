import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";

/**
 * Perform a constant-time string comparison to mitigate timing attacks.
 */
function timingSafeCompare(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf8");
  const bBuf = Buffer.from(b, "utf8");

  // Determine if lengths match
  const lengthsMatch = aBuf.length === bBuf.length;

  // If lengths differ, compare aBuf with itself to keep timing uniform
  const compareBuf = lengthsMatch ? bBuf : aBuf;
  const isEqual = crypto.timingSafeEqual(aBuf, compareBuf);

  return lengthsMatch && isEqual;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
          return null;
        }

        // Use constant-time comparison for both email and password
        const isEmailValid = timingSafeCompare(credentials?.email || "", adminEmail);
        const isPasswordValid = timingSafeCompare(credentials?.password || "", adminPassword);

        if (isEmailValid && isPasswordValid) {
          return { id: "1", name: "Admin User", email: adminEmail };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/nullify",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 14 * 24 * 60 * 60, // 2 weeks (14 days in seconds)
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


