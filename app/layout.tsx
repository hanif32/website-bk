import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "white", }} className="container">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
