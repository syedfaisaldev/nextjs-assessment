import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import "nprogress/nprogress.css";
import PageLayout from '../components/Layout/PageLayout';
import { GlobalProvider } from '../context/AppContext';
import '../styles/globals.css';
const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <PageLayout>
        <TopProgressBar />
        <Component {...pageProps} />
      </PageLayout>
    </GlobalProvider>
  )
}
export default MyApp
