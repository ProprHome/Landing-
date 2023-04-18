import Details from '@/components/details/Details';
import Footer from '@/components/footer/Footer';
import FormWrapper from '@/components/form-wrapper/FormWrapper';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          ProprHome - Portugal’s 1st real estate marketplace powered by
          blockchain
        </title>
      </Head>
      <Header />
      <Hero />
      <FormWrapper />
      <Details />
      <Footer />
    </main>
  );
}
