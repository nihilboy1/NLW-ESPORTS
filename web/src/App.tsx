import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import logoImage from '../public/images/logo-nlw-esports.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'
import { GameCard } from './components/GameCard'
import './styles/main.css'

export interface GameProps {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export function App() {
  const [games, setGames] = useState<GameProps[]>([])
  useEffect(() => {
    async function FetchGameData() {
      const res = await fetch('http://localhost:3333/games')
      const data = await res.json()
      setGames(data)
    }
    FetchGameData()
  }, [])
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="" />
      <h1 className="text-6xl text-white font-black mt-20 bg-nlwGradient bg-clip-text">
        Seu <span className="text-transparent ">duo</span> está aqui
      </h1>
      <div className="grid grid-cols-6 gap-4 mt-16 w-[90%]">
        {games?.map(game => (
          <GameCard
            key={game.id}
            adsCount={game._count.ads}
            bannerUrl={game.bannerUrl}
            title={game.title}
          />
        ))}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal games={games} />
      </Dialog.Root>
    </div>
  )
}

export default App
