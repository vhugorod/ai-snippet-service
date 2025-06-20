import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import tailwindStylesheetUrl from "./styles/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
];

export default function App() {
  return (
    <html lang="en" className="bg-gray-100 text-gray-800">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col items-center justify-start p-6">
          <header className="w-full max-w-3xl text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-600">AI Snippet Service</h1>
          </header>
          <main className="w-full max-w-3xl bg-white shadow rounded-xl p-6">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
