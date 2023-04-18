import Link from 'next/link';
import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';
import YoutubeIcon from './YoutubeIcon';

const SocialLinks = () => {
  return (
    <div className="flex max-w-[293px] gap-8 justify-center items-center">
      <Link href="https://www.instagram.com/proprhome/?hl=en">
        <div className="bg-white rounded-xl border border-[#B6B6B6] h-12 w-12 flex items-center justify-center">
          <InstagramIcon />
        </div>
      </Link>
      <Link href="https://www.facebook.com/ProprHome/">
        <div className="bg-white rounded-xl border border-[#B6B6B6] h-12 w-12 flex items-center justify-center">
          <FacebookIcon />
        </div>
      </Link>
      <Link href="https://www.linkedin.com/company/proprhome/?originalSubdomain=pt">
        <div className="bg-white rounded-xl border border-[#B6B6B6] h-12 w-12 flex items-center justify-center">
          <LinkedInIcon />
        </div>
      </Link>
      <Link href="https://www.youtube.com/channel/UCURM2OIRL94EwtmVXGOKODg">
        <div className="bg-white rounded-xl border border-[#B6B6B6] h-12 w-12 flex items-center justify-center">
          <YoutubeIcon />
        </div>
      </Link>
    </div>
  );
};

export default SocialLinks;
