import React from 'react';

const Hero = () => {
  return (
    <section className="mb-6">
      <section className="bg-white rounded-b-[60px] p-8">
        <h1 className="text-5xl text-[#7A8083] font-normal text-center">
          Welcome to <span className="text-[#00D188] font-bold">ProprHome</span>
        </h1>
        <h4 className="text-xl font-semibold text-center p-8 pb-0 text-[#212B30]">
          Portugal’s 1st real estate marketplace powered by blockchain
        </h4>
      </section>
      <p className="text-xl text-center p-8 text-[#212B30] font-medium">
        Focused on personal brand building, accountability and transparency,
        ProprHome&apos;s goal is to enable a more trusted real estate experience
        for everyone.
      </p>
    </section>
  );
};

export default Hero;
