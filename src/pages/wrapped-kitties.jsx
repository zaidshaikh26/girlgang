import React from 'react'
import "../styles/wrapped-kitties.css"
import offer from "./images/offer.svg"
import cattutor from "./images/cattutor-july-1718-tutor-copy@3x.png"

export default function WrappedKitties() {

    const numbers = [1,2,3];
  return (
    <main class="sc-dkPtRN kCyLCm">
        <div class="sc-hKwDye sc-kDTinF hOrZdU cmxFnd">
            <h2 class="sc-gsDKAQ dZSXeB">Wrapped CryptoKitties</h2>
            <div class="sc-iqseJM AYCQQ">
                {numbers.map(number=>
                <div>
                    <img src={offer} alt="Wrapped CryptoKitties"/>
                    <h2>Wrapped CryptoKitties</h2>
                    <p><span>Ξ</span>0.0017</p>
                    <p>Last 24 Hrs: <b>0</b></p>
                    <p>Market Cap: <b>111.308</b></p>
                    <div>
                        <a class="ButtonV2 ButtonV2--size-small ButtonV2--color-default Catalogue--c2a--button" href="/profile/0x09fE5f0236F0Ea5D930197DCE254d77B04128075">
                        <span class="ButtonV2-children">Search WCK</span>
                        </a>
                    </div>
                </div>
                )}
            </div>
            <div class="sc-pVTFL jJdkGn">
                <div>
                    <img src={cattutor} alt="Kitty Class"/>
                </div>
                <p><b>Wrapped Kitties are ERC20 tokens, each backed 1:1 by an ERC721 CryptoKitty. Assuming you own the kitty and are logged in, you will find a "Wrap Kitty" button on a kitty's profile page which you can use to send the kitty to one of the 3 accounts. You can then redeem this token at any time against any of the CryptoKitties within each account, or exchanging it at a site like Uniswap ©</b></p>
            </div>
        </div>
    </main>
  )
}
