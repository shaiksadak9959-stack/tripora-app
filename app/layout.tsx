import type { ReactNode } from "react";
// import "./globals.css";

export const metadata = {
  title: "Tripora — Travel Made Simple",
  description:
    "Flights, trains, buses, hotels and visa services in one secure platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}