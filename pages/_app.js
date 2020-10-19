import '../styles/globals.css'
import { FormspreeProvider } from '@formspree/react';

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1528255705453165965">
      <Component {...pageProps} />
    </FormspreeProvider >
  )
}

export default MyApp
