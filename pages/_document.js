import Document, { Html, Head, Main, NextScript } from 'next/document';

//Allows you to customize all the html
//It needs to be class based component so it could extend the Document main class
//Head is not the same a the head in _app.js

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <div id='overlay'></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;