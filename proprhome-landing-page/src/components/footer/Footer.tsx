import SocialLinks from './SocialLinks';

const Footer = ({ language }: any) => {
  return (
    <footer className="p-6 bg-transparent-white md:flex md:items-center md:justify-between md:px-8 lg:px-16 ">
      {language ? (
        <>
          {' '}
          <div className="md:flex md:flex-col md:justify-between md:items-center md:h-full  md:gap-2">
            <h4 className="font-semibold text-2xl text-[#212B30] text-center mb-5 md:mb-0">
              Follow us to find out more
            </h4>
            <p className="text-lg font-normal text-center">
              info@proprhome.com
            </p>
          </div>
          <div className="md:flex md:flex-col md:justify-between md:items-center md:h-full md:gap-2">
            <div className="my-11 md:my-0 flex items-center justify-center">
              <SocialLinks />
            </div>
            <p className="text-lg font-normal text-center">
              ProprHome © 2023 All rights reserved{' '}
            </p>
          </div>
        </>
      ) : (
        <>
          {' '}
          <div className="md:flex md:flex-col md:justify-between md:items-center md:h-full  md:gap-2">
            <h4 className="font-semibold text-2xl text-[#212B30] text-center mb-5 md:mb-0">
              Siga-nos para saber mais
            </h4>
            <p className="text-lg font-normal text-center">
              info@proprhome.com
            </p>
          </div>
          <div className="md:flex md:flex-col md:justify-between md:items-center md:h-full md:gap-2">
            <div className="my-11 md:my-0 flex items-center justify-center">
              <SocialLinks />
            </div>
            <p className="text-lg font-normal text-center">
              ProprHome © 2023 All rights reserved{' '}
            </p>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
