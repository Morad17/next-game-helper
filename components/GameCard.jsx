import React from 'react'
import Image from 'next/image'

const GameCard = () => {
  return (
    <div className="game-card">
        <div className="game-title">
            <h2>Game Name</h2>
        </div>
        <div className="game-image">
            <Image width={180} height={270} src="/assets/images/assassins-creed-origins.jpeg"/>
        </div>
        <div className="game-tags">
            <div className="">Ps4</div>
            <div className="">Pc</div>
        </div>
    </div>
  )
}

export default GameCard