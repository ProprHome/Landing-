import Image from 'next/image';
import React from 'react';
import FormEn from '../forms/FormEn';
import FormPt from '../forms/FormPt';

const FormWrapper = ({ language }) => {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="relative">
        {language ? (
          <Image
            src="/book.png"
            alt="ebook cover for proprhome book"
            height={433}
            width={433}
          />
        ) : (
          <Image
            src="/bookPt.png"
            alt="ebook cover for proprhome book"
            height={433}
            width={433}
          />
        )}
      </div>
      <div className="md:mr-8 lg:mr-40">
        {language ? <FormEn /> : <FormPt />}
      </div>
    </section>
  );
};

export default FormWrapper;
