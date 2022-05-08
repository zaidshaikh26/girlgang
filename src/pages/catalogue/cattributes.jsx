import React from 'react'
import cattutor from "../images/cattutor-july-1718-tutor-copy@3x.png"

export default function Cattributes() {

    const numbersthree = [65, 44, 12, 4,65, 44, 12, 4,65, 44, 12, 4];
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
            <h2 class="sc-gsDKAQ hfWOXG">Cattributes</h2>
            <p>Every <span>CryptoKitty</span> is made up of 12 cattributes correspondent to its <a href="/guide/genes">genetic code</a>. You can either buy or breed your purrfect combination...</p>
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
            <div class="sc-pVTFL jJdkGn">
                <div>
                    <img src={cattutor} alt="Kitty Class"/>
                </div>
                <p>In addition to <a href="/catalogue/cryptokitties">CryptoKitties</a> there are <a href="/catalogue/fancies">Fancies</a>, <a href="/catalogue/shiny-fancies">Shiny Fancies</a>, <a href="/catalogue/special-edition">Special Edition</a> and <a href="/catalogue/exclusive">Exclusive</a> kitties that have either a time limited breeding window or, very occasionally, are awarded by the team at <a href="https://meetdapper.com" target="_blank">Dapper Labs</a>. The first 100 kitties - including the <a href="/kitty/1">Genesis</a> kitty - are <a href="/catalogue/founders">Founders</a> and are genetically important within the game.</p>
            </div>
        </div>
    </main>
  )
}
