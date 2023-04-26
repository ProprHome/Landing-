import Link from "next/link"

const Banner = ({language}:any) => {
  return (
    <div className='hidden h-20 md:flex items-center justify-center gap-10'>
        <span className="text-[#232B2F] font-semibold text-xl">{language? 'As featured': 'Publicado em'} in</span>
        <Link href='https://www.bloomberg.com/press-releases/2023-04-21/proprhome-launches-partnership-with-metaverse-company-to-offer-digital-twin-real-estate-viewings' className="bg-bloomberg bg-no-repeat bg-center bg-contain h-10 w-36"></Link>
        <Link href='https://finance.yahoo.com/news/proprhome-launches-partnership-metaverse-company-190900151.html?fr=sycsrp_catchall' className="bg-yahoo h-11 bg-no-repeat bg-center bg-contain w-40"></Link>
        <Link href='https://www.marketwatch.com/press-release/proprhome-launches-partnership-with-metaverse-company-to-offer-digital-twin-real-estate-viewings-2023-04-21?mod=search_headline' className="bg-marketwatch bg-no-repeat bg-center bg-contain h-12 w-44"></Link>
    </div>
  )
}

export default Banner