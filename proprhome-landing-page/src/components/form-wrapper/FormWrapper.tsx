import Image from 'next/image';
import React from 'react';
import FormEn from '../forms/FormEn';

const FormWrapper = () => {
  return (
    <section className="flex flex-col">
      <div className="relative">
        <Image
          src="/book.png"
          alt="ebook cover for proprhome book"
          height={433}
          width={433}
        />
      </div>
      <FormEn />
    </section>
  );
};

export default FormWrapper;
