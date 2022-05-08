import React from 'react'
import "../styles/kittyverse.css"
import logomark from "./images/logomark.svg"
import KittyVerse from "./images/kittyverse.svg"
import kittyhelper from "./images/kittyhelper-logo.png"
import icon1 from "./images/icon1.svg"

export default function Kittyverse() {

    const numberstwo = [65, 44, 12, 4,65, 44,65, 44, 12];

  return (
    <main class="sc-dkPtRN kCyLCm">
        <div class="Content">
            <div class="Container">
                <div class="KittyVersePage-kittyWrapper">
                    <img src={logomark} class="KittyVersePage-kitty" alt="Crypto Kitty"/>
                </div>
                <div class="KittyVersePage-logoWrapper">
                    <img src={KittyVerse} class="KittyVersePage-logo" alt="KittyVerse logo"/>
                </div>
                <section class="Content-section KittyVersePage-section">
                    <h1>Take your Kitties to new heights</h1>
                    <p>Your CryptoKitty unlocks a universe of infinite experiences.</p>
                    <p>You can still breed and collect your CryptoKitties – but now you can also compete in leaderboards, send your cats to participate in literal catfights, and much more!</p>
                    <div class="KittyVersePage-games">
                        <div class="KittyVersePage-games-cards">
                            {numberstwo.map(founder=>
                            <a href="https://kittyhelper.co/" rel="noopener" target="_blank" class="KittyVerseCard">
                                <div class="KittyVerseCard-item">
                                    <img src={kittyhelper} class="KittyVerseCard-logo" alt="KittyHelper logo"/>
                                    <img src={icon1} class="KittyVerseCard-icon" alt="KittyHelper icon"/>
                                </div>
                                <div class="KittyVerseCard-text-item">
                                    <p class="KittyVerseCard-title">KittyHelper</p>
                                    <p class="KittyVerseCard-url">kittyhelper.co</p>
                                </div>
                            </a>
                            )}
                        </div>
                        <button class="ButtonV2 ButtonV2--size-section ButtonV2--color-default ButtonV2--flat">
                            <span class="ButtonV2-children">Play KittyVerse Games</span>
                        </button>
                    </div>
                </section>
                <section class="Content-section KittyVersePage-section KittyVersePage-section--box">
                    <h2>The future is meow!</h2>
                    <p>CryptoKitties is built on blockchain technology. One of most exciting aspects of this technology is that it empowers extensible design and development. Basically, if an idea proves itself (like CryptoKitties), people can easily build on top of it.</p>
                    <p>Players get new experiences. Creators get access to an active player base, a proven concept, and a whole host of development resources. And everyone involved has a stake in the future they are helping to shape.</p>
                    <p>This extensibility makes it possible for community creators, developers, and founders to:</p>
                    <ul><li>Earn real value from the digital assets and experiences they own and shape</li>
                        <li>Leverage an existing concept and playerbase (like the CryptoKitties community) for their independent or complementary kitty-flavoured project</li>
                        <li>Use existing code and open-source resources to create a project in next to no time (via the CryptoKitties Developurr program)</li>
                    </ul>
                    <p>And there’s no middleman or gatekeeper – just you, your ideas, and your favourite furry friend.</p>
                </section>
            </div>
        </div>
    </main>
  )
}
