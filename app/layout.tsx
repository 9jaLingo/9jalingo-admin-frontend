import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "9ja Lingo Admin",
  description: "Admin dashboard for managing users, pricing, and service settings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
