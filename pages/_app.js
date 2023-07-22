import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }) {
    // Add any additional logic or wrapper components here
  
    return (
      <SessionProvider session={pageProps.session}>
       <Component {...pageProps} />
      </SessionProvider>
     );
    }
  
export default MyApp;