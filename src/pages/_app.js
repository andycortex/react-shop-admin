import { ProviderAuth } from '@hooks/useAuth';
import MainLayout from '@layouts/MainLayout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return(
    <ProviderAuth>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProviderAuth>
  );
}

export default MyApp;
