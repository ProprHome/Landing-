import React from 'react';

const Details = ({ language }) => {
  return (
    <section className="mx-2 my-16 md: mb-28 md:max-w-[996px] md:mx-auto">
      {language ? (
        <>
          <h3 className="font-bold text-3xl text-center mb-16">
            Get your free e-book today
          </h3>
          <ul className="text-center md:flex md:flex-wrap md:justify-center md:items-center md:gap-5 md:gap-y-2">
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Introduction</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Documents and Identification</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Finanças Portal</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">IRS, Personal income tax</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Direct Social Security</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Banking</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Bringing pets</span>
            </li>
          </ul>
        </>
      ) : (
        <>
          <h3 className="font-bold text-3xl text-center mb-16">
            Obtenha seu e-book grátis hoje
          </h3>
          <ul className="text-center md:flex md:flex-wrap md:justify-center md:items-center md:gap-5 md:gap-y-2">
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Introdução</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Documentos e Identificação</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Portal de Finanças</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">
                IRS, Imposto sobre o Rendimento das Pessoas Singulares
              </span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Segurança Social Direta</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Banca</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 relative">
              <span className="hidden md:inline-block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-6">Tragendo animais de estimação</span>
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default Details;
