import Document, { Html, Head, Main, NextScript } from "next/document"


class MyDoc extends Document {
    render() {
        return <Html lang='en'>
            <Head>
                <link rel="preload"
                href="/font/IBMPlexSans.ttf"
                as="font"
                crossOrigin="anonymous" 
                />
                <link rel="preload"
                href="/font/IBMPlexSans-Regular.ttf"
                as="font"
                crossOrigin="anonymous" 
                />
                <link rel="preload"
                href="/font/IBMPlexSans-SemiBold.ttf"
                as="font"
                crossOrigin="anonymous" 
                />
            </Head>
            <body>
                <Main></Main>
                <NextScript />
            </body>
        </Html>
    }
}

export default MyDoc;