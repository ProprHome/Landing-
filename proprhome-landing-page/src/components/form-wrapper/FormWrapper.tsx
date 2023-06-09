import Image from 'next/image';
import React from 'react';
import TestFormPt from '../forms/TestFormPT';
import TestForm from '../forms/TestForm';

const FormWrapper = ({ language }: any) => {
  return (
    <section className="flex flex-col p-2 md:flex-row md:items-center md:justify-center md:gap-20 md:mb-20">
      <div className="relative mb-10 md:mb-0">
        {language ? (
          <img
            src="/01.png"
            alt="ebook cover for proprhome book"
           
          />
        ) : (
          <img
            src="/02.png"
            alt="ebook cover for proprhome book"
           
          />
        )}
      </div>
      <div className="md:pt-20 md:pl-14 max-w-[525px]">
        {/* {language ? <EnglishForm /> : <PortugueseForm />} */}
        {language ? <TestForm /> : <TestFormPt />}
      </div>
    </section>
  );
};

export default FormWrapper;
