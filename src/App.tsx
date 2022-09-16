import Logo from './assets/logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { FormEvent, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { api } from './services/api';
import { CreateAdModal } from './components/CreateAdModal';

export interface GamesProps {
  id: string;
  bannerUrl: string;
  title: string;
  _count: { Ads: number };
}

export function App() {
  const [ games, setGames ] = useState<GamesProps[]>([]);
  const [ isDialogOpen, setIsDialogOpen ] = useState(false);
  const [ isGameSelected, setIsGameSelected ] = useState(false);
  
  useEffect(() => {
    api.get('games').then(({data}) => {
      setGames(data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto w-full flex items-center flex-col my-20">
      <img src={Logo} alt="" />

      <h2 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-duoGradient bg-clip-text text-transparent'>duo</span> está aqui
      </h2>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => (
          <GameBanner game={game} key={game.id} />
        ))}
      </div>

      <Dialog.Root 
        onOpenChange={(open) => {
          setIsGameSelected(false)
          setIsDialogOpen(open);
        }}
        open={isDialogOpen}
      >
        <CreateAdBanner />

        <CreateAdModal 
          games={games} 
          isGameSelected={isGameSelected} 
          setIsGameSelected={setIsGameSelected}
          setIsDialogOpen={setIsDialogOpen}
        />
      </Dialog.Root>
    </div>
  )
}
