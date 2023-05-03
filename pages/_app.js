import "@/styles/globals.css";
import { Roboto, Oswald } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-oswald",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} ${oswald.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
