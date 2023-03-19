import '@/styles/globals.css'
import '@/styles/sidenav.css'
import Transition from '@/component/transition';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/transition.css';
import { SSRProvider } from 'react-bootstrap';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


export default function App({ Component, pageProps }) {

   useEffect(() => {
     Aos.init({
       easing: "ease-out",
     });
   }, []);

  return (
    <SSRProvider>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </SSRProvider>
  ); 
}
