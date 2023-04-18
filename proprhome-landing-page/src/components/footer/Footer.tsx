import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="p-6 bg-transparent-white">
      <div>
        <h4 className="font-semibold text-2xl text-[#212B30] text-center mb-5">
          Follow us to find out more
        </h4>
        <p className="text-lg font-normal text-center">info@proprhome.com</p>
      </div>
      <div className="my-11">
        <SocialLinks />
      </div>
      <p className="text-lg font-normal text-center">
        ProprHome © 2023 All rights reserved{' '}
      </p>
    </footer>
  );
};

export default Footer;
