import Image from 'next/image'
import RootLayout from './layout'
import Navbar from '../components/Navbar'
import Card from '@/components/Card'
import GameCard from '@/components/GameCard'

export default function Home() {
  return (
    <div className="">
      <h1 className="all-games-title">All Games</h1>
      <GameCard />
    </div>
  )
}
