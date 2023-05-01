import Image from 'next/image';
import GlobeIcon from './GlobeIcon';
import DownIcon from './DownIcon';
import SocialLinks from '../footer/SocialLinks';

const Header = ({ language, setLanguage }: any) => {
  const handleLanguageChange = () => {
    console.log('changing lang');
    setLanguage((pre: boolean) => !pre);
    console.log(language);
  };
  return (
    <header className="bg-transparent-white px-7 py-7 flex items-center justify-between">
      <div className="relative h-9 w-44 md:h-16 md:w-72">
        <img
          src="/propr-logo.png"
          alt="ProprHome logo"
        />
      </div>
      {/* translation switch */}
      <div className="md:flex items-center gap-7">
        <div className="hidden md:flex">
          <SocialLinks />
        </div>

        <div className="pl-8 border-l border-[#7A808321]">
          <button
            onClick={handleLanguageChange}
            className="w-24 p-1 border border-[#B6B6B6] rounded-xl flex justify-between items-center"
          >
            <div className="flex items-center gap-1">
              <GlobeIcon />
              {language ? 'EN' : 'PT'}
            </div>
            <DownIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
