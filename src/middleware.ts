// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { decrypt } from "@/lib/crypto";
// import { cookies } from "next/headers";

// const secureCookiePrefix = "securePrefix_";

// export function middleware(request: NextRequest) {
//   const cookieStore = cookies();
//   const encryptedFilialId =
//     cookieStore.get(`${secureCookiePrefix}filialId`)?.value || "";
//   const encryptedClienteId =
//     cookieStore.get(`${secureCookiePrefix}clienteId`)?.value || "";

//   const filialId = encryptedFilialId ? decrypt(encryptedFilialId) : null;
//   const clienteId = encryptedClienteId ? decrypt(encryptedClienteId) : null;

//   if (request.nextUrl.pathname.startsWith("/contrate-online")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   if (!filialId && !clienteId && request.nextUrl.pathname !== "/cidades") {
//     return NextResponse.redirect(new URL("/cidades", request.url));
//   }

//   if (filialId && clienteId && request.nextUrl.pathname === "/cidades") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   if (
//     !clienteId &&
//     request.nextUrl.pathname === "/contrate-online/cliente-nr/nossos-servicos"
//   ) {
//     return NextResponse.redirect(new URL("/contrate-online", request.url));
//   }

//   if (clienteId && request.nextUrl.pathname === "/contrate-online") {
//     return NextResponse.redirect(
//       new URL("/contrate-online/cliente-nr/nossos-servicos", request.url)
//     );
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/",
//     "/cidades",
//     "/planos",
//     "/faturas",
//     "/conheca-a-nr/:path*",
//     "/fale-conosco/:path*",
//     "/contrate-online/:path*",
//   ],
// };
