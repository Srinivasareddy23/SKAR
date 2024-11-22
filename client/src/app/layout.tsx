import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/mainNavbar/Navbar";
import MainFooter from "@/components/mainFooter/Footer";
import TopNavbar from "@/components/mainNavbar/topNavbar";

export const metadata: Metadata = {
  title: "SKAR Private Limited",
  description: "A startup Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gary-200">
        <TopNavbar />
        <div className="sticky top-0 z-10">
          <NavBar />
        </div>
       
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
