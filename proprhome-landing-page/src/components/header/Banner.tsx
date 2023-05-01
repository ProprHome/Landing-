import Link from 'next/link';

const Banner = ({ language }: any) => {
  return (
    <div className=" h-20 flex items-center justify-center gap-3 md:gap-10">
      <span className="text-[#232B2F] font-semibold text-xs md:text-xl">
        {language ? 'As featured in' : 'Publicado em'} 
      </span>
      <Link
        href="https://www.bloomberg.com/press-releases/2023-04-21/proprhome-launches-partnership-with-metaverse-company-to-offer-digital-twin-real-estate-viewings"
        className="bg-bloomberg bg-no-repeat bg-center bg-contain h-5 w-16 md:h-10 md:w-36"
      ></Link>
      <Link
        href="https://finance.yahoo.com/news/proprhome-launches-partnership-metaverse-company-190900151.html?fr=sycsrp_catchall"
        className="bg-yahoo bg-no-repeat bg-center bg-contain h-5 w-16 md:h-11 md:w-40"
      ></Link>
      <Link
        href="https://www.marketwatch.com/press-release/proprhome-launches-partnership-with-metaverse-company-to-offer-digital-twin-real-estate-viewings-2023-04-21?mod=search_headline"
        className="bg-marketwatch bg-no-repeat bg-center bg-contain h-6 w-20 md:h-12 md:w-44 mb-1"
      ></Link>
    </div>
  );
};

export default Banner;
