import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NextHead from 'next/head';
import Header from '../components/header/Head';
import Nav from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <title>Shop e-Cart</title>
        <meta name="description" content="by Aneesha" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
      </NextHead>

      <div className="container">
        <Header />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
