import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import BackgroundImage from "@/components/BackGroundImage/BackGroundImage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikash-Portfolio",
  description: "Vikash-Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <BackgroundImage>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <NavBar />
            {children}
          </div>
        </BackgroundImage>
      </body>
    </html>
  );
}
