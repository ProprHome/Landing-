import Image from 'next/image';
import React from 'react';
import TestFormPt from '../forms/TestFormPT';
import TestForm from '../forms/TestForm';

const FormWrapper = ({ language }: any) => {
  return (
    <section className="flex flex-col  md:flex-row md:items-center md:justify-center md:gap-16">
      <div className="relative mb-10 md:mb-0">
        {language ? (
          <Image
            src="/01.png"
            alt="ebook cover for proprhome book"
            height={550}
            width={550}
          />
        ) : (
          <Image
            src="/02.png"
            alt="ebook cover for proprhome book"
            height={550}
            width={550}
          />
        )}
      </div>
      <div className="">
        {/* {language ? <EnglishForm /> : <PortugueseForm />} */}
        {language ? <TestForm /> : <TestFormPt />}
      </div>
    </section>
  );
};

export default FormWrapper;
