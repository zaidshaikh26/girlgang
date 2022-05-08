import React from 'react'
import purrstige from "../images/purrstige1.svg"
import search from "../images/search.svg"
import cattutor from "../images/cattutor-july-1718-tutor-copy@3x.png"
import hackatao from "../images/hackatao.png"
import RnqjR6wUjFySNjRu76h00A from "../images/1_RnqjR6wUjFySNjRu76h00A.gif"

export default function Purrstige() {

    const numberstwo = [65, 44, 12, 4];
    const numbersfour = [65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4, 4,65, 44, 12, 4, 12, 4];

  return (
    <main className="sc-dkPtRN KCyLCm">
        <div className="Catalogue">
            <div className="sc-jrQzAO bejXuO Catalogue--header">
                <h1><a href="/catalogue">CryptoKitties <span>Catalogue</span></a></h1>
                <div className="SearchBar">
                    <div className="SearchBar-container">
                        <div className="SearchBar-inputContainer">
                            <div className="SearchBar-icon">
                                <svg className="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/search" className="IconSearch" stroke="#C4C3C0" stroke-width="1.5"><g id="icon-search-copy"><path d="M10.5709785,10.5709785 L10.571001,10.570956 C12.8096551,8.33249161 12.8096551,4.6669393 10.5708661,2.42890911 C8.3332504,0.190344899 4.66769809,0.190344899 2.42890911,2.42913385 C0.190344899,4.6667496 0.190344899,8.33230191 2.42913385,10.5710909 C4.6667496,12.8096551 8.33230191,12.8096551 10.5709785,10.5709785 Z" id="Fill-1"></path><path d="M10.9111111,10.9111111 L13.7555556,13.7555556" id="Line" stroke-linecap="round"></path>/&gt;</g></g></g></svg>
                            </div>
                            <input type="text" className="SearchBar-input" placeholder="Search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value=""/>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="sc-gsDKAQ gZnIbH">Purrstige</h2>
            <div className="sc-crHmcD dkbDCN">
                {numberstwo.map(founder=>
                <div className="sc-egiyK sc-hBUSln fcQgve fdwNk">
                    <h4 type="purrstige" role="button" class="sc-fotOHu dbPWZC" style={{textTransform: "capitalize"}}><a href="/catalogue/cattribute/meownificent">meownificent</a></h4>
                    <ul class="sc-fFeiMQ gecRpV">
                        <li><a href="/search?include=sale&amp;search=meownificent">Ξ0.149 / 14</a></li>
                        <li><span>5.385% of 260</span></li>
                    </ul>
                    <div className="KittyCard KittyCard--display-responsive KittyCard--color-dahlia KittyCard--clickable">
                        <div className="KittyCard-main">
                            <div class="KittyCard-main-container">
                                <div class="KittyCard-imageContainer KittyCard-imageContainer--shadow">
                                    <img class="KittyCard-image" src={purrstige} alt="1973341"/>
                                </div>
                            </div>
                            <div class="KittyCard-status">
                                <button class="CardStatus" type="button">
                                    <div class="CardStatusBody CardStatusBody--expanded" data-testid="status-note-sale" role="status">
                                        <i class="Icon Icon--tag CardStatusBody-icon Icon--tiny"></i>
                                        <div class="CardStatusBody-textWrapper">
                                            <p class="CardStatusBody-title">Buy</p><p class="CardStatusBody-value">0.149 ETH</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="KittyCard-details">
                            <div class="KittyCard-details-header">
                                <div class="KittyCard-details-item KittyCard-details-item--highlight">
                                    <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#2A2825" stroke-width="1.5"><path d="M6.472 1.654L4.388 14.346M11.458 1.654L9.374 14.346M14.504 6H1.654M14.502 10.72H1.654"></path></g></g></svg>1973341
                                </div>
                            </div>
                            <div class="KittyCard-details-stats">
                                <div class="KittyCard-details-item">
                                    <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#c4c3c0" stroke-width="1.5"><path stroke-linecap="round" d="M12 1c0 7.019-8 6.282-8 14M4 1c0 7.019 8 6.282 8 14"></path><path stroke-linecap="square" d="M5 2.5h6M5 13h6M6 5h4M6 10.5h4"></path></g></g></svg><span>Gen 10</span>
                                </div>
                                <div class="KittyCard-details-item">
                                    <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#c4c3c0" stroke-width="1.5"><circle cx="8" cy="8" r="6.25"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M8 4.5v4.031h3.028"></path></g></g></svg>Catatonic (1w)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <ul className="Catalogue--cattributes">
                {numbersfour.map(founder=>
                <li class="sc-bBHxTw ZOQPO"><a href="/catalogue/cattribute/oohshiny"><img src={search} alt=""/>oohshiny (2484)</a></li>
                )}
            </ul>
            <div class="sc-pVTFL jJdkGn">
                <div>
                    <img src={cattutor} alt="Kitty Class"/>
                </div>
                <p>Purrstige Traits are Cattributes that are only breedable for a limited amount of time. Every Purrstige Trait has a special recipe that needs both Cattributes and hidden genes. To breed a kitten with a Purrstige Trait, a player needs the right combination of Cattributes and hidden genes in the two parent cats. <a href="/guide/purrstige-traits">Read more about Purrstige traits here</a></p>
            </div>
            <h2 class="sc-gsDKAQ gZnIbH">Purrstige: <a href="/catalogue/hackatao">Hackatao &amp; Async Art (2020)</a></h2>
            <div class="Catalogue--hackatao">
                <img src={hackatao} alt="Hackatao and Async Art" style={{position: "relative"}}/>
                <img alt="" src={RnqjR6wUjFySNjRu76h00A}/>
            </div>
            <div className="sc-crHmcD dkbDCN">
            {numberstwo.map(founder=>
            <div className="sc-egiyK sc-hBUSln fcQgve fdwNk">
                <h4 type="purrstige" role="button" class="sc-fotOHu dbPWZC" style={{textTransform: "capitalize"}}><a href="/catalogue/cattribute/meownificent">meownificent</a></h4>
                <ul class="sc-fFeiMQ gecRpV">
                    <li><a href="/search?include=sale&amp;search=meownificent">Ξ0.149 / 14</a></li>
                    <li><span>5.385% of 260</span></li>
                </ul>
                <div className="KittyCard KittyCard--display-responsive KittyCard--color-dahlia KittyCard--clickable">
                    <div className="KittyCard-main">
                        <div class="KittyCard-main-container">
                            <div class="KittyCard-imageContainer KittyCard-imageContainer--shadow">
                                <img class="KittyCard-image" src="https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1973341.svg" alt="1973341"/>
                            </div>
                        </div>
                        <div class="KittyCard-status">
                            <button class="CardStatus" type="button">
                                <div class="CardStatusBody CardStatusBody--expanded" data-testid="status-note-sale" role="status">
                                    <i class="Icon Icon--tag CardStatusBody-icon Icon--tiny"></i>
                                    <div class="CardStatusBody-textWrapper">
                                        <p class="CardStatusBody-title">Buy</p><p class="CardStatusBody-value">0.149 ETH</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="KittyCard-details">
                        <div class="KittyCard-details-header">
                            <div class="KittyCard-details-item KittyCard-details-item--highlight">
                                <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#2A2825" stroke-width="1.5"><path d="M6.472 1.654L4.388 14.346M11.458 1.654L9.374 14.346M14.504 6H1.654M14.502 10.72H1.654"></path></g></g></svg>1973341
                            </div>
                        </div>
                        <div class="KittyCard-details-stats">
                            <div class="KittyCard-details-item">
                                <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#c4c3c0" stroke-width="1.5"><path stroke-linecap="round" d="M12 1c0 7.019-8 6.282-8 14M4 1c0 7.019 8 6.282 8 14"></path><path stroke-linecap="square" d="M5 2.5h6M5 13h6M6 5h4M6 10.5h4"></path></g></g></svg><span>Gen 10</span>
                            </div>
                            <div class="KittyCard-details-item">
                                <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#c4c3c0" stroke-width="1.5"><circle cx="8" cy="8" r="6.25"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M8 4.5v4.031h3.028"></path></g></g></svg>Catatonic (1w)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            </div>
            <div class="sc-pVTFL jJdkGn">
                <div>
                    <img src={cattutor} alt="Kitty Class"/>
                </div>
                <p>Purrstige Traits are Cattributes that are only breedable for a limited amount of time. Every Purrstige Trait has a special recipe that needs both Cattributes and hidden genes. To breed a kitten with a Purrstige Trait, a player needs the right combination of Cattributes and hidden genes in the two parent cats. <a href="/guide/purrstige-traits">Read more about Purrstige traits here</a></p>
            </div>
        </div>
    </main>
  )
}
