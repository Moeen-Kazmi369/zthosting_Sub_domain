import { Inter } from "next/font/google";
import Head from "next/head";
import "../styles/style.scss";
import FullLayout from "@/layouts/FullLayout";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
         <title>Xtreme Starter Next Js App</title>
         <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <FullLayout>
        {children}
        </FullLayout>
        </body>
    </html>
  );
}
