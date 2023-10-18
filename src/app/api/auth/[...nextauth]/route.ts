import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import connectDB from "@/database/connection";
import User, { UserProps } from "@/database/models/User";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectDB();

        const user = await User.findByCredentials(
          credentials?.email.trim()!,
          credentials?.password.trim()!
        );

        return {
          email: user.email,
          image: "",
          name: `${user.firstName} ${user.lastName}`,
          id: user._id.toString(),
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user)
        token.user = {
          ...token.user,
          role: (user as unknown as UserProps).role,
        };
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.role = token.user.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/",
    error: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
