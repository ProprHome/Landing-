import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';
import YoutubeIcon from './YoutubeIcon';

const SocialLinks = () => {
  return (
    <div className="flex max-w-[293px] gap-8 justify-center mt">
      <div className="bg-white rounded-xl border border-[#B6B6B6] h-12 w-12 flex items-center justify-center">
        <InstagramIcon />
      </div>
      <div className="bg-white rounded-xl border border-[#B6B6B6] h-12 w-12 flex items-center justify-center">
        <FacebookIcon />
      </div>
      <div className="bg-white rounded-xl border border-[#B6B6B6] h-12 w-12 flex items-center justify-center">
        <LinkedInIcon />
      </div>
      <div className="bg-white rounded-xl border border-[#B6B6B6] h-12 w-12 flex items-center justify-center">
        <YoutubeIcon />
      </div>
    </div>
  );
};

export default SocialLinks;
