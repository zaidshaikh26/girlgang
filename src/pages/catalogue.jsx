import "../styles/catalogue.css"
import { Link } from "react-router-dom";
import normal from "./images/normal.svg"
import cattutor from "./images/cattutor-july-1718-tutor-copy@3x.png"
import diamond from "./images/diamond.svg"
import cat from "./images/cat.svg"
import search from "./images/search.svg"
import hackatao from "./images/hackatao.png"
import RnqjR6wUjFySNjRu76h00A from "./images/1_RnqjR6wUjFySNjRu76h00A.gif"
import collaboration from "./images/collaboration-banner.png"


export default function Catalogue() {
    const numbers = [65, 44, 12, 4, 26];
    const numberstwo = [65, 44, 12, 4];
    const numbersthree = [65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4];
    const numbersfour = [65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4, 4,65, 44, 12, 4, 12, 4];
    const numbersix = [65, 44];
    
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
                <div class="Catalogue--banner">
                    <p>Welcome to the <span>new</span> CryptoKitties <span>Cat</span>alogue - ready to help you find your purr-fect match. CryptoKitties launched in 2017 and are the first ever example of an ERC-721 token.</p>
                </div>
                <h2 class="sc-gsDKAQ hfWOXG">Kitty Types</h2>
                <div className="sc-ieecCq hPoAgP">
                    {numbers.map(founder=>
                        <div>
                            <img src={normal} alt="CryptoKitties" role="button"/>
                            <h4><a href="/catalogue/cryptokitties">CryptoKitties</a></h4>
                            <ul>
                                <li><a href="/search?include=sale">Ξ0.005 / 157,890</a></li>
                                <li>8.427% of 1,873,731</li>
                            </ul>
                            <p>e.g. <a href="/catalogue/cattribute/hotrod">hotrod</a>, <a href="/catalogue/cattribute/wingtips">wingtips</a>, <a href="/catalogue/cattribute/gold">gold</a>, <a href="/catalogue/cattribute/cerulian">cerulian</a>, <a href="/catalogue/cattribute/tinybox">tinybox</a>, <a href="/catalogue/cattribute/serpent">serpent</a></p>
                        </div>
                    )}
                </div>
                <div class="sc-pVTFL jJdkGn">
                    <div>
                        <img src={cattutor} alt="Kitty Class"/>
                    </div>
                    <p>In addition to <a href="/catalogue/cryptokitties">CryptoKitties</a> there are <a href="/catalogue/fancies">Fancies</a>, <a href="/catalogue/shiny-fancies">Shiny Fancies</a>, <a href="/catalogue/special-edition">Special Edition</a> and <a href="/catalogue/exclusive">Exclusive</a> kitties that have either a time limited breeding window or, very occasionally, are awarded by the team at <a href="https://meetdapper.com" target="_blank">Dapper Labs</a>. The first 100 kitties - including the <a href="/kitty/1">Genesis</a> kitty - are <a href="/catalogue/founders">Founders</a> and are genetically important within the game.</p>
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
                <h2 class="sc-gsDKAQ hfWOXG">Cattributes</h2>
                <p>Every <a href="/catalogue/cryptokitties">CryptoKitty</a> is made up of 12 cattributes correspondent to its <a href="/guide/genes">genetic code</a>. You can either buy or breed your purrfect combination...</p>
                <div className="sc-hGPBjI jnfVJz">
                    {numbersthree.map(founder=>
                    <div role="button">
                        <div>
                            <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/cat" stroke="#ef52d1" stroke-width="1.5"><g id="Group" transform="translate(0.500000, 1.500000)"><path d="M0.469334549,8.77081735 L0.482884828,8.77783489 C0.478224217,8.77527379 0.473681571,8.77294426 0.469334549,8.77081735 Z M1.03463917,8.74700044 C1.33616622,8.81461344 1.6042432,8.99621227 1.83844219,9.31704627 C2.15438734,9.74986601 2.82574666,10.4065775 3.62519332,10.94159 C4.80092729,11.7284247 6.10128003,12.1712479 7.49617489,12.1389938 C9.09588695,12.1020038 10.4788154,11.5633184 11.6771441,10.6741763 C12.0305933,10.4119222 12.3491844,10.1324652 12.6442213,9.83719556 C12.7556386,9.72569034 12.8589345,9.61676299 12.9635328,9.5018856 C13.0237982,9.43569771 13.1854572,9.2540131 13.1823824,9.25742845 C13.3626638,9.05718139 13.5603964,8.90754331 13.7796395,8.80613072 C13.8518179,8.77274402 13.9189717,8.74594387 13.9853257,8.72442835 C13.8760117,8.50079681 13.7622347,8.25121878 13.6427365,7.97470195 C13.5016865,7.64831464 13.3544573,7.28867687 13.1911805,6.87482239 C13.0335855,6.47536931 12.5507106,5.21515299 12.5126586,5.11742621 C12.2974968,4.56483941 12.1585143,4.23929658 12.0857588,4.11658997 C11.1276663,2.501793 9.53473113,1.6875 7.51351244,1.6875 C5.35714344,1.6875 3.79141919,2.47927255 2.82007758,4.11640003 C2.75227135,4.23075935 2.62233558,4.55318383 2.42694552,5.09607808 C2.38206726,5.220773 1.94592243,6.45831011 1.80304728,6.84999256 C1.56102481,7.51348061 1.35142409,8.04638632 1.14851162,8.49976989 C1.11016096,8.58545983 1.07222421,8.66785932 1.03463917,8.74700044 Z" id="Stroke-12"></path><path d="M3.90022,1.90850292 C2.73521457,1.30266217 2.01690736,0.921616276 1.73228368,0.758179819 C1.72377247,0.735935189 1.74598046,0.752699813 1.76006395,0.824881059 C1.84614688,1.26607637 2.05751737,2.32273864 2.39387761,3.99336025 L3.90022,1.90850292 Z M1.73228368,0.758179819 C1.72939205,0.756519391 1.72654519,0.754881423 1.72374307,0.753265908 C1.71243385,0.746745758 1.71162318,0.738815889 1.71621312,0.737727574 Z" id="Fill-4"></path><path d="M13.2602197,1.90850292 C12.0952142,1.30266217 11.376907,0.921616276 11.0922833,0.758179819 C11.0837721,0.735935189 11.1059801,0.752699813 11.1200636,0.824881059 C11.2061465,1.26607637 11.417517,2.32273864 11.7538773,3.99336025 L13.2602197,1.90850292 Z M11.0922833,0.758179819 C11.0893917,0.756519391 11.0865448,0.754881423 11.0837427,0.753265908 C11.0724335,0.746745758 11.0716228,0.738815889 11.0762128,0.737727574 Z" id="Fill-4-Copy" transform="translate(12.368626, 2.911301) scale(-1, 1) translate(-12.368626, -2.911301) "></path></g></g></g></svg>
                            <p class="selected">Fur</p>
                        </div>
                        <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/search" class="IconSearch" stroke="#ef52d1" stroke-width="1.5"><g id="icon-search-copy"><path d="M10.5709785,10.5709785 L10.571001,10.570956 C12.8096551,8.33249161 12.8096551,4.6669393 10.5708661,2.42890911 C8.3332504,0.190344899 4.66769809,0.190344899 2.42890911,2.42913385 C0.190344899,4.6667496 0.190344899,8.33230191 2.42913385,10.5710909 C4.6667496,12.8096551 8.33230191,12.8096551 10.5709785,10.5709785 Z" id="Fill-1"></path><path d="M10.9111111,10.9111111 L13.7555556,13.7555556" id="Line" stroke-linecap="round"></path>/&gt;</g></g></g></svg>
                    </div>
                    )}
                </div>
                <ul className="sc-fKVqWL kcpKXn">
                    {numbersfour.map(founder=>
                    <li>
                        <div>
                            <div class="Catalogue--cattributes--imgContainer" role="button" ></div>
                            <span class="Catalogue--cattributes--cattTitle"><a href="/catalogue/cattribute/selkirk">selkirk</a></span>
                            <span class="Catalogue--cattributes--cattTitle"><a href="/search?include=sale&amp;search=selkirk">Ξ0.005 / 10,739</a></span>
                            <span>5.94% of 180,766</span>
                        </div>
                    </li>
                    )}
                </ul>
                <h2 class="sc-gsDKAQ hfWOXG">Purrstige</h2>
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
                <h2 class="sc-gsDKAQ hfWOXG">Purrstige Collab: <a href="/catalogue/hackatao">Hackatao &amp; Async Art (2020)</a></h2>
                <div class="Catalogue--hackatao">
                    <img src={hackatao} alt="Hackatao &amp; Async Art" style={{position: "relative"}}/>
                    <img src={RnqjR6wUjFySNjRu76h00A} alt=""/>
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
                <h2 class="sc-gsDKAQ hfWOXG">Collab: Muse and CryptoKitties</h2>
                <div class="Catalogue--muse"><img src={collaboration} alt="Muse and CryptoKitties Collab" style={{position: "relative"}}/></div>
                <div className="sc-crHmcD jJBoEb">
                    {numbersix.map(founder=>
                    <div className="sc-egiyK sc-bqiRlB fcQgve gNbyIY">
                        <h4 type="specialedition" role="button" class="sc-fotOHu jBLWae"><a href="/catalogue/special-edition/Marty">Marty</a></h4>
                        <ul class="sc-fFeiMQ gecRpV">
                            <li><a href="/search?include=sale&amp;search=Marty">Ξ0.59 / 16</a></li>
                            <li><span>8.511% of 188</span></li>
                        </ul>
                        <div class="KittyCard KittyCard--display-responsive KittyCard--color-parakeet KittyCard--clickable" role="button">
                            <div class="KittyCard-main">
                                <div class="KittyCard-main-container">
                                    <div class="KittyCard-imageContainer">
                                        <img class="KittyCard-image" src="https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1949271.png" alt="1949271"/>
                                    </div>
                                </div>
                                <div class="KittyCard-status">
                                    <button class="CardStatus" type="button">
                                        <div class="CardStatusBody CardStatusBody--expanded" data-testid="status-note-sale" role="status">
                                            <i class="Icon Icon--tag CardStatusBody-icon Icon--tiny"></i>
                                            <div class="CardStatusBody-textWrapper">
                                                <p class="CardStatusBody-title">Buy</p>
                                                <p class="CardStatusBody-value">0.59 ETH</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div class="KittyCard-details">
                                <div class="KittyCard-details-header">
                                    <div class="KittyCard-details-item KittyCard-details-item--highlight">
                                        <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#2A2825" stroke-width="1.5"><path d="M6.472 1.654L4.388 14.346M11.458 1.654L9.374 14.346M14.504 6H1.654M14.502 10.72H1.654"></path></g></g></svg>1949271
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