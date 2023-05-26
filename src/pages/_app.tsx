import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import AppHead from "src/components/AppHead";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <AppHead />
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
