interface GameBannerProps {
  game: {
    id: string;
    bannerUrl: string;
    title: string;
    _count: { Ads: number };
  }
}

export function GameBanner({ game }: GameBannerProps) {
  return (
    <a 
      href="" 
      className='relative rounded-lg overflow-hidden hover:scale-110 
      transition-all duration-300 ease-in-out'
    >
      <img src={game.bannerUrl} alt="" />

      <div className='w-full pt-16 pb-4 px-[14px] bg-boxGradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white'>{game.title}</strong>
        <p className='text-zinc-300 text-sm'>{game._count.Ads} anúncio(s)</p>
      </div>
    </a>
  );
}