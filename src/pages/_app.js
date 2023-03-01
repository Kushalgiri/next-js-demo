import '@/styles/globals.css'
import Transition from '@/component/transition';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/transition.css';
import { SSRProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </SSRProvider>
  ); 
}
