import React from 'react';

const Details = ({ language }: any) => {
  return (
    <section className="mx-2 my-16 md: mb-28 md:max-w-[996px] md:mx-auto">
      {language ? (
        <>
          <h3 className="font-bold text-3xl text-center mb-16">
            Get your free e-book today
          </h3>
          <ul className="text-center md:flex md:flex-wrap md:justify-center md:items-center md:gap-5 md:gap-y-2">
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Introduction</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Documents and Identification</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Finanças Portal</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">IRS, Personal income tax</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Direct Social Security</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Banking</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Bringing pets</span>
            </li>
          </ul>
        </>
      ) : (
        <>
          <h3 className="font-bold text-3xl text-center mb-16">
            Obtenha seu e-book grátis hoje
          </h3>
          <ul className="text-center md:flex md:flex-wrap md:justify-center md:items-center md:gap-5 md:gap-y-2">
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Introdução</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Documentos e Identificação</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Portal de Finanças</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">
                IRS, Imposto sobre o Rendimento das Pessoas Singulares
              </span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Segurança Social Direta</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Banca</span>
            </li>
            <li className="font-normal text-xl my-2 md:my-0 ">
              <span className=" inline-block w-4 h-4 rounded-full bg-[#00D188]"></span>
              <span className="ml-2">Tragendo animais de estimação</span>
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default Details;
