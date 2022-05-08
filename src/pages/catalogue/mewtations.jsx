import React from 'react'
import diamond from "../images/diamond.svg"
import cat from "../images/cat.svg"

export default function Mewtations() {

    const numberstwo = [65, 44, 12, 4];

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
            <h2 class="sc-gsDKAQ hfWOXG">Mewtations</h2>
            <p>When a cattribute is discovered a <a href="/catalogue/diamonds">Diamond</a> mewtation gem is awarded and there can never be another for that trait. Thereafter <a href="/catalogue/gilded">Gilded</a> gems are awarded for the 2nd to 10th kitty that mewtated this trait, <a href="/catalogue/amethyst">Amethyst</a> for 11th to 100th and <a href="/catalogue/lapis">Lapis</a> for 101st to 500th. Note: a kitty must mewtate the trait to be awarded the gem. More than one gem can be awarded where applicable.</p>
            <div className="sc-dJjYzT dgQIXW">
                {numberstwo.map(founder=>
                    <div>
                        <img src={diamond} alt="Diamond" role="button"/>
                        <h4><a href="/catalogue/diamonds">Diamond</a></h4>
                        <ul>
                            <li><a href="/search?include=sale&amp;search=mewtation:diamond">Ξ10.69 / 27</a></li>
                            <li>11.111% of 243</li>
                        </ul>
                        <div class="KittyCard KittyCard--display-responsive KittyCard--color-strawberry KittyCard--clickable" role="button">
                            <div class="KittyCard-main">
                                <div role="button" class="CardIcons CardIcons--bottomLeft CardIcons--1">
                                    <div role="button" class="CardIcons-container">
                                        <div class="CardIcons-icon">
                                            <img class="CardIcons-icon-img" src={diamond} alt="Jewel - diamond"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="KittyCard-main-container">
                                    <div class="KittyCard-imageContainer KittyCard-imageContainer--shadow">
                                        <img class="KittyCard-image" src={cat} alt="265806"/>
                                    </div>
                                </div>
                                <div class="KittyCard-status">
                                    <button class="CardStatus" type="button">
                                        <div class="CardStatusBody CardStatusBody--expanded" data-testid="status-note-sale" role="status">
                                            <i class="Icon Icon--tag CardStatusBody-icon Icon--tiny"></i>
                                            <div class="CardStatusBody-textWrapper">
                                                <p class="CardStatusBody-title">Buy</p><p class="CardStatusBody-value">10.69 ETH</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div class="KittyCard-details">
                                <div class="KittyCard-details-header">
                                    <div class="KittyCard-details-item KittyCard-details-item--highlight">
                                        <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#2A2825" stroke-width="1.5"><path d="M6.472 1.654L4.388 14.346M11.458 1.654L9.374 14.346M14.504 6H1.654M14.502 10.72H1.654"></path></g></g></svg>265806
                                    </div>
                                </div>
                                <div class="KittyCard-details-stats">
                                    <div class="KittyCard-details-item">
                                        <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#c4c3c0" stroke-width="1.5"><path stroke-linecap="round" d="M12 1c0 7.019-8 6.282-8 14M4 1c0 7.019 8 6.282 8 14"></path><path stroke-linecap="square" d="M5 2.5h6M5 13h6M6 5h4M6 10.5h4"></path></g></g></svg><span>Gen 1</span>
                                    </div>
                                    <div class="KittyCard-details-item">
                                        <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#c4c3c0" stroke-width="1.5"><circle cx="8" cy="8" r="6.25"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M8 4.5v4.031h3.028"></path></g></g></svg>Fast (1m)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </main>
  )
}
