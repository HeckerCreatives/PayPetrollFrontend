import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Poppins , Roboto_Slab} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const opensans = Roboto_Slab({ subsets: ["latin"], weight: [  "400", "500", "600","700"] });


export const metadata: Metadata = {
  title: "Xtra Pay",
  description: "PayPetroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
