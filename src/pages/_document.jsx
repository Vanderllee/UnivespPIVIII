import Document, {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                
                    <link rel="preconnect" href="https://fonts.gstatic.com" />

        
                    <meta charSet="utf-8" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        content="Web site created using create-react-app"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital,wght@1,400;1,500;1,600&family=Varela&family=Varela+Round&display=swap" rel="stylesheet" />
                   
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}