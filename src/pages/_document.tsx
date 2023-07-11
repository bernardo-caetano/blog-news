import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="pt-BR">
      <Head />
      <body className={`h-full w-full bg-gray-900 text-white font-roboto`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
