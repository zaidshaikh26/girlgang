import React from 'react'
import Guide from '../../components/guide';
import cattutor from "../images/cattutor-july-1718-tutor-copy@3x.png"
import buy from "../images/buy.svg"

export default function GettingStarted() {

    const numbersthree = [65, 44, 12, 4];

  return (
    <>
    <Guide/>
    <div class="Guide">
        <h2 class="sc-gsDKAQ hfWOXG">Getting Started</h2>
        <div class="sc-pVTFL jJdkGn extraMarginBottom">
            <div>
                <img src={cattutor} alt="Kitty Class"/>
            </div>
            <p>Welcome to the official CryptoKitties Guide, your one-stop-shop for all things CryptoKitties! Here you’ll find the basics on how to play the game as well as advanced tips and tricks to become a skilled breeder. There’s lots to consider when playing CryptoKitties, here are the basics so you can get started right away.</p>
        </div>
        <div class="Guide--2x2">
            {numbersthree.map(founder=>
            <div>
                <img src={buy} alt="buying"/>
                <h3>Buying</h3>
                <p>Look around on <a href="/search?include=sale">the marketplace</a> to find yourself some Kitties. If you’ve found a Kitty you’d like to buy, click on the cat and hit the “Buy now” button upon which you will be prompted by your browser wallet provider (e.g. metamask) plugin transaction window. It may take a couple minutes to show up on your profile. This all depends on the Ethereum network.</p>
            </div>
            )}
        </div>
    </div>
    </>
  )
}
