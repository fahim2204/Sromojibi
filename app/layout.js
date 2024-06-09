import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

const fontInter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const fontPlayfair = Playfair_Display({ subsets: ["latin"], variable: '--font-play-fair' })


export const metadata = {
  title: "NextJS Tailwind Starter",
  description: "NextJS Tailwind Starter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPlayfair.variable}  ${fontInter.variable}`}>
        <Providers>
          <HeaderSection />
          {children}
          <FooterSection />
        </Providers>
      </body>
    </html>
  );
}
