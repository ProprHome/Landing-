'useClient';
import Details from '@/components/details/Details';
import Footer from '@/components/footer/Footer';
import FormWrapper from '@/components/form-wrapper/FormWrapper';
import Banner from '@/components/header/Banner';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  // true means English, false means Portuguese
  const [language, setLanguage] = useState(true);
  return (
    <>
      <Head>
        <title>
          ProprHome - Portugal’s 1st real estate marketplace powered by
          blockchain
        </title>
      </Head>
      <main>
        <Header language={language} setLanguage={setLanguage} />
        <Banner language={language} />
        <Hero language={language} />
        <FormWrapper language={language} />
        <Details language={language} />
        <Footer language={language} />
      </main>
    </>
  );
}
