import { NextResponse } from "next/server";

export const middleware = (request) => {
  if (request.nextUrl.pathname !== '/login') {
    console.log("Redirecting to /login");
    return NextResponse.redirect(new URL('/login', request.url));
  }
//   return NextResponse.next();
};
