import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://domaracki.tech"),
  title: "Nikodem Domaracki | Frontend Developer",
  description: "Web developer 💻",
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
  ],
  openGraph: {
    type: "website",
    title: "Nikodem Domaracki | Frontend Developer",
    description: "Web developer 💻",
    url: "https://domaracki.tech",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Nikodem Domaracki | Frontend Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-p-14 overflow-x-hidden !scroll-smooth"
    >
      <body className={`overflow-x-hidden ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={["light", "dark", "green"]}
        >
          <Nav />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
