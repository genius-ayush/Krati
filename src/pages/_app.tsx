import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
  <Navbar/> 
  <Component {...pageProps} />);
  <Footer/>
  </div>)
}
