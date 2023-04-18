import React from 'react';

const Hero = ({ language }: any) => {
  return (
    <section className="mb-6 md:mb-16">
      {language ? (
        <div className="md:flex md:items-start">
          <section className="bg-white rounded-b-[60px] p-8 md:flex-1 md:min-h-[296px] md:flex md:flex-col md:justify-center md:items-center ">
            <h1 className="text-5xl text-[#7A8083] font-normal text-center">
              Welcome to{' '}
              <span className="text-[#00D188] font-bold">ProprHome</span>
            </h1>
            <h4 className="text-xl font-semibold text-center p-8 pb-0 text-[#212B30]">
              Portugal’s 1st real estate marketplace powered by blockchain
            </h4>
          </section>
          <p className="text-xl text-center p-8 text-[#212B30] font-medium md:bg-[#ffffffcc] md:flex-1 md:rounded-b-[60px] md:min-h-[296px] md:max-w-[595px] md:flex md:items-center md:px-20">
            Focused on personal brand building, accountability and transparency,
            ProprHome&apos;s goal is to enable a more trusted real estate
            experience for everyone.
          </p>
        </div>
      ) : (
        <div className="md:flex md:items-start">
          <section className="bg-white rounded-b-[60px] p-8 md:flex-1 md:min-h-[296px] md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="text-5xl text-[#7A8083] font-normal text-center">
              Bem-vindo à{' '}
              <span className="text-[#00D188] font-bold">ProprHome</span>
            </h1>
            <h4 className="text-xl font-semibold text-center p-8 pb-0 text-[#212B30]">
              O primeiro mercado imobiliário Português alimentado pela
              Blockchain
            </h4>
          </section>
          <p className="text-xl text-center p-8 text-[#212B30] font-medium md:bg-[#ffffffcc] md:flex-1 md:rounded-b-[60px] md:min-h-[296px] md:max-w-[595px] md:flex md:items-center md:px-20">
            Focada na construção da marca pessoal, responsabilização e
            transparência, o objetivo da ProprHome é possibilitar uma
            experiência imobiliária com mais confiança para todos.
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
