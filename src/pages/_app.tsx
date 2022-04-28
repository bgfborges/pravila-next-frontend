import Header from "../../components/Header";
import { AppProps } from 'next/app'
import '../../styles/globals.css';
import Footer from "../../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
