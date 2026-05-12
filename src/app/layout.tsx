import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mohammad Musharraf | Full Stack Engineer & Designer",
  description: "Portfolio of Mohammad Musharraf - Full Stack Software Engineer, AI Enthusiast, Graphic Designer, and Founder of Folo.grpx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#050505] text-white selection:bg-purple-500/30">
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#050505] to-[#050505]"></div>
        <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-20"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
