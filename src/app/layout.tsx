import type { Metadata } from "next";
import { Kanit, Bungee } from "next/font/google";
import localFont from "next/font/local";
import "./styles/global.sass";
import NavBar from "./_component/NavBar";
import "animate.css";

const bungee = Bungee({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-bungee",
});
const kanit = Kanit({
  weight: ["200", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

const chunk = localFont({
  src: "../../public/font/chunkfive.print.ttf",
  style: "normal",
  weight: "200",
  variable: "--font-chunk",
});

export const metadata: Metadata = {
  title: "The Sunset Diner St. Marys",
  description:
    "The Sunset Diner is an absolutely authentic diner at the far west end of St. Marys, on Queen Street West. Since the 1950s, this diner has served four generations at the same location. There are some things that people expect when they visit a diner and the Sunset Diner does them all well! The all-day breakfast is a winner, and our burgers are excellent. And, don’t forget the dinner staples – fries, foot-longs and milkshakes, all consistently delicious!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${bungee.variable} ${chunk.variable} font-sans`}
    >
      <body id="mainBody">
        <NavBar>{children}</NavBar>
      </body>
    </html>
  );
}
