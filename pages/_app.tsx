import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { firebaseAppInit } from '../utils/firebase';

export default function App({ Component, pageProps }: AppProps) {
  firebaseAppInit();
  return <Component {...pageProps} />
}