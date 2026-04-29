import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
export const proxy = async (request) => {
  // get session
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/signin", request.url));
};
export const config = {
  matcher: ["/profile", "/all-photos/:path"],
};
