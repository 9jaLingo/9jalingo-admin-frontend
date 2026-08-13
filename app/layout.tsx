import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "9ja Lingo | Model Pricing",
  description: "Admin pricing dashboard for managing AI model costs and usage limits.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
