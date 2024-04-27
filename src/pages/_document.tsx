
import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <Navbar></Navbar> */}
      <body>
        <main className="">
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  );
}
