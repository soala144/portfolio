import type { Metadata } from "next";
import { Geologica, Poppins } from "next/font/google"; // ✅ only valid Google fonts
import "./globals.css";
import CustomCursor from "./_components/CustomCursor";
import ReactLenis from "lenis/react";

const geologicaSans = Geologica({
  variable: "--font-geologica-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soaladev",
  description:
    "The portfolio of a valedictorian, who specialises in web development and design.",
  icons: {
    icon: "/cartoonImg.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geologicaSans.variable} antialiased`}
      >
        <ReactLenis
          root
          options={{
            duration: 0.8,
            easing: (t) => 1 - Math.pow(1 - t, 3),
          }}
        >
          <CustomCursor />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
