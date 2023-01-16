import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-GHFH4F2G6W`} />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GHFH4F2G6W', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
