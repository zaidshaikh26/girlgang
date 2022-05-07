import "../styles/guide.css"
import { Link } from "react-router-dom";
import arrow from "./images/go-arrow.svg"

export default function Guide() {

    const numberstwo = [65, 44];
    const numbersthree = [65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4];

    return (
        <main class="sc-dkPtRN kCyLCm">
            <div class="Guide">
                <div class="sc-jrQzAO bejXuO Guide--header">
                    <h1><a href="/guide">CryptoKitties <span>Guide</span></a></h1>
                    <div class="SearchBar">
                        <div class="SearchBar-container">
                            <div class="SearchBar-inputContainer">
                                <div class="SearchBar-icon">
                                    <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/search" class="IconSearch" stroke="#C4C3C0" stroke-width="1.5"><g id="icon-search-copy"><path d="M10.5709785,10.5709785 L10.571001,10.570956 C12.8096551,8.33249161 12.8096551,4.6669393 10.5708661,2.42890911 C8.3332504,0.190344899 4.66769809,0.190344899 2.42890911,2.42913385 C0.190344899,4.6667496 0.190344899,8.33230191 2.42913385,10.5710909 C4.6667496,12.8096551 8.33230191,12.8096551 10.5709785,10.5709785 Z" id="Fill-1"></path><path d="M10.9111111,10.9111111 L13.7555556,13.7555556" id="Line" stroke-linecap="round"></path>/&gt;</g></g></g></svg>
                                </div>
                                <input type="text" class="SearchBar-input" placeholder="Search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value=""></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Guide--menu visible">
                    <h3 style={{color: "rgb(239, 82, 209)"}}><button type="button" class="Toolbar-menu-button Toolbar-menu-button--active"><svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="24" height="24" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd" stroke="#EF52D1" stroke-width="1.5" transform="matrix(-1 0 0 1 12.48 2.56)" vector-effect="non-scaling-stroke"><g stroke-linecap="round"><path d="M0 1.28h5.04m2.76 0h1.16M0 5.12h1.186m2.86 0H8.96M0 9.28h5.117m2.787 0H8.96"></path></g><circle cx="6.56" cy="1.12" r="1.12"></circle><circle cx="2.72" cy="5.12" r="1.12"></circle><circle cx="6.56" cy="9.12" r="1.12"></circle></g></svg></button>Guide Sections</h3>
                    <div class="visible">
                        {numberstwo.map(founder=>
                        <ul>
                            {numbersthree.map(founder=>
                                <li><a href="/guide/getting-started">Getting Started</a></li>
                            )}
                        </ul>
                        )}
                    </div>
                </div>
                <div class="Guide--links"><div></div><div><a href="/guide/getting-started">Getting Started</a><img src={arrow} alt=""/></div></div>
            </div>
        </main>
    )

}