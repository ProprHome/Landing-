import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent-white px-7 py-7 flex items-center justify-between">
      <div className="relative">
        <Image
          src="/propr-logo.png"
          alt="ProprHome logo"
          height={38}
          width={172}
        />
      </div>
      {/* translation switch */}
    </header>
  );
};

export default Header;
