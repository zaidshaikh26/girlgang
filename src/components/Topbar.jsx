import { Link } from "react-router-dom";

export default function Topbar() {
    
    return (
        <header class="Header">
            <Link to="/"  class="Header-logo active" >
                <span class="Header-logo-icon"></span>
                <h1 class="Header-logo-wordmark">CryptoKitties</h1>
            </Link>
            <div class="ProviderStatusContainer">
                <div class="ProviderStatus ProviderStatus--locked">
                    <span class="ProviderStatus-message">
                        <span class="ProviderStatus-badge"></span>
                        <span class="ProviderStatus-status">Locked wallet:</span>
                        <span class="ProviderStatus-provider">MetaMask</span>
                    </span>
                </div>
            </div>
            <nav class="Header-navigation">
                <ul class="Header-navigation-items">
                    <li class="Header-navigation-item">
                        <div role="button" class="Dropdown" data-testid="dropdown">
                            <Link to="/catalogue"  class="Dropdown-link active" >
                                <div class="Dropdown-link-image">
                                    <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16" data-testid="dropdown-icon"><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon/cat" stroke="#2A2825" strokeWidth="1.5"><g id="Group" transform="translate(0.500000, 1.500000)"><path d="M0.469334549,8.77081735 L0.482884828,8.77783489 C0.478224217,8.77527379 0.473681571,8.77294426 0.469334549,8.77081735 Z M1.03463917,8.74700044 C1.33616622,8.81461344 1.6042432,8.99621227 1.83844219,9.31704627 C2.15438734,9.74986601 2.82574666,10.4065775 3.62519332,10.94159 C4.80092729,11.7284247 6.10128003,12.1712479 7.49617489,12.1389938 C9.09588695,12.1020038 10.4788154,11.5633184 11.6771441,10.6741763 C12.0305933,10.4119222 12.3491844,10.1324652 12.6442213,9.83719556 C12.7556386,9.72569034 12.8589345,9.61676299 12.9635328,9.5018856 C13.0237982,9.43569771 13.1854572,9.2540131 13.1823824,9.25742845 C13.3626638,9.05718139 13.5603964,8.90754331 13.7796395,8.80613072 C13.8518179,8.77274402 13.9189717,8.74594387 13.9853257,8.72442835 C13.8760117,8.50079681 13.7622347,8.25121878 13.6427365,7.97470195 C13.5016865,7.64831464 13.3544573,7.28867687 13.1911805,6.87482239 C13.0335855,6.47536931 12.5507106,5.21515299 12.5126586,5.11742621 C12.2974968,4.56483941 12.1585143,4.23929658 12.0857588,4.11658997 C11.1276663,2.501793 9.53473113,1.6875 7.51351244,1.6875 C5.35714344,1.6875 3.79141919,2.47927255 2.82007758,4.11640003 C2.75227135,4.23075935 2.62233558,4.55318383 2.42694552,5.09607808 C2.38206726,5.220773 1.94592243,6.45831011 1.80304728,6.84999256 C1.56102481,7.51348061 1.35142409,8.04638632 1.14851162,8.49976989 C1.11016096,8.58545983 1.07222421,8.66785932 1.03463917,8.74700044 Z" id="Stroke-12"></path><path d="M3.90022,1.90850292 C2.73521457,1.30266217 2.01690736,0.921616276 1.73228368,0.758179819 C1.72377247,0.735935189 1.74598046,0.752699813 1.76006395,0.824881059 C1.84614688,1.26607637 2.05751737,2.32273864 2.39387761,3.99336025 L3.90022,1.90850292 Z M1.73228368,0.758179819 C1.72939205,0.756519391 1.72654519,0.754881423 1.72374307,0.753265908 C1.71243385,0.746745758 1.71162318,0.738815889 1.71621312,0.737727574 Z" id="Fill-4"></path><path d="M13.2602197,1.90850292 C12.0952142,1.30266217 11.376907,0.921616276 11.0922833,0.758179819 C11.0837721,0.735935189 11.1059801,0.752699813 11.1200636,0.824881059 C11.2061465,1.26607637 11.417517,2.32273864 11.7538773,3.99336025 L13.2602197,1.90850292 Z M11.0922833,0.758179819 C11.0893917,0.756519391 11.0865448,0.754881423 11.0837427,0.753265908 C11.0724335,0.746745758 11.0716228,0.738815889 11.0762128,0.737727574 Z" id="Fill-4-Copy" transform="translate(12.368626, 2.911301) scale(-1, 1) translate(-12.368626, -2.911301) "></path></g></g></g></svg>
                                </div>
                                <div class="Dropdown-link-label" data-testid="dropdown-title">Catalogue</div>
                                <svg class="IconV2 Dropdown-link-caret IconV2--position-default IconV2--display-inlineBlock" width="12" height="12" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#2A2825" fillRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </li>
                    <li class="Header-navigation-item">
                        <div role="button" class="Dropdown" data-testid="dropdown">
                            <Link to="/search"  class="Dropdown-link active" >
                                <div class="Dropdown-link-image">
                                    <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16" data-testid="dropdown-icon"><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon/search" className="IconSearch" stroke="#2A2825" strokeWidth="1.5"><g id="icon-search-copy"><path d="M10.5709785,10.5709785 L10.571001,10.570956 C12.8096551,8.33249161 12.8096551,4.6669393 10.5708661,2.42890911 C8.3332504,0.190344899 4.66769809,0.190344899 2.42890911,2.42913385 C0.190344899,4.6667496 0.190344899,8.33230191 2.42913385,10.5710909 C4.6667496,12.8096551 8.33230191,12.8096551 10.5709785,10.5709785 Z" id="Fill-1"></path><path d="M10.9111111,10.9111111 L13.7555556,13.7555556" id="Line" strokeLinecap="round"></path>/&gt;</g></g></g></svg>
                                </div>
                                <div class="Dropdown-link-label" data-testid="dropdown-title">Search</div>
                                <svg class="IconV2 Dropdown-link-caret IconV2--position-default IconV2--display-inlineBlock" width="12" height="12" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#2A2825" fillRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </li>
                    <li class="Header-navigation-item">
                        <div role="button" class="Dropdown" data-testid="dropdown">
                            <Link to="/guide"  class="Dropdown-link active" >
                                <div class="Dropdown-link-image">
                                    <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16" data-testid="dropdown-icon"><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon/book" className="IconBook" stroke="#2A2825" strokeWidth="1.5"><path d="M7.94991664,13.3554097 C9.85693371,12.4874936 11.9372845,12.1265562 14.1797854,12.2714804 C14.1878409,12.2719141 14.1878409,12.2719141 14.1959075,12.2720009 C14.3339721,12.2720009 14.4458955,12.1600774 14.4458955,12.0220118 L14.4459075,3.47830005 C14.4459075,3.34579419 14.3425332,3.23631015 14.2102316,3.22871186 C11.5847768,3.07783201 9.62326089,3.40203266 8.32760189,4.16804005 L7.97126935,4.37870764 L7.60309435,4.18949641 C6.06938603,3.40129826 4.09787186,3.07346801 1.68062445,3.22158529 C1.54874579,3.22966618 1.44592781,3.33897719 1.44592781,3.47110446 L1.44591371,11.8213168 C1.44591462,11.8221445 1.44591462,11.8221445 1.44591919,11.8229722 C1.44683341,11.9610475 1.5595001,12.0722305 1.69758864,12.0713113 C3.99714184,12.0560856 6.08392814,12.4832532 7.94991664,13.3554097 Z" id="Path-48"></path><path d="M8,4.48533065 L8,13.0138334" id="Line" strokeLinecap="round"></path></g></g></svg>
                                </div>
                                <div class="Dropdown-link-label" data-testid="dropdown-title">Guides</div>
                                <svg class="IconV2 Dropdown-link-caret IconV2--position-default IconV2--display-inlineBlock" width="12" height="12" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#2A2825" fillRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </li>
                    <li class="Header-navigation-item">
                        <div role="button" class="Dropdown" data-testid="dropdown">
                            <Link to="/blog" target="_blank" class="Dropdown-link active" >
                                <div class="Dropdown-link-image">
                                    <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16" data-testid="dropdown-icon"><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round"><g stroke="#2A2825" strokeWidth="1.5"><g id="icon/menu" transform="translate(0, -1)"><path d="M2,4 L14,4" id="Line-8"></path><path d="M2,8 L10,8" id="Line-8-Copy"></path><path d="M2,12 L6,12" id="Line-8-Copy-2"></path></g></g></g></svg>
                                </div>
                                <div class="Dropdown-link-label" data-testid="dropdown-title">More</div>
                                <svg class="IconV2 Dropdown-link-caret IconV2--position-default IconV2--display-inlineBlock" width="12" height="12" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#2A2825" fillRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </li>
                    <li class="Header-navigation-item">
                        <button class="ButtonV2 ButtonV2--size-xs ButtonV2--color-pink"><span class="ButtonV2-children">Start</span></button>
                    </li>
                    <li>
                        <div class="Header-navigation-activity" role="button"><div class="Header-navigation--globalfeed"></div>
                            <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><path fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.261" d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm-1.43-1.849c.061-.061.123-.184.308-.337.736-.706-.676-.492-.062-1.167.492-.521.062-1.166-.307-1.381-.276-.185-.706.06-.86-.216-.276-.491-.4.4-.768.185m-.767.122c-.246.153-.4.337-.4.337m9.396-3.192s-1.198-.553-1.658.245c-.492.83-.737.614-1.535.768M8.35 4.607c.369.307.4.553.123.645-.736.215-.675 1.013-.337 1.013.337 0 .676 0 .337.337-.337.338-.184 2.027.676 1.658m-.368-5.403s-2.119.768-1.474 1.136c.184.092.338.185.46.277"></path></svg>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )

}