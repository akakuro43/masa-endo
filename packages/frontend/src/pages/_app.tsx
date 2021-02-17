import React from 'react'
import { AppProps } from 'next/app'

import '../sass/globals.sass'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
