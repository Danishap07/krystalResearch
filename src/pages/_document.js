// import CustomCursor from '@/components/customCursor'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        
      </Head>
      <body>
        {/* <CustomCursor /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
