import React, { useEffect, useState } from 'react'
import "../styles/search.css"
import ReactPaginate from 'react-paginate';
import content from "../content/content-data.json"
import pregnant from "./images/pregnant.svg"
import normal from "./images/normal.svg"
import fancy from "./images/fancy.svg"
import shinyfancy from "./images/shinyfancy.svg"
import purrstige from "./images/purrstige.svg"
import specialedition from "./images/specialedition.png"
import exclusive from "./images/exclusive.png"

export default function Search() {

    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setlimit] = useState(12);

    useEffect(() => {

        const kittys = () => {
            const res = content.posts
            setItems(res.slice(0, limit));
            const total = Object.keys(res).length;
            setPageCount(Math.ceil(total/limit));
            setTotalCount(total);
            console.log(total);
        }
        kittys();
    }, []);

    const getkittys = (from, to) => {
        const res = content.posts
        setItems(res.slice(from, to));
    }

    // console.log(items.slice(0, 5));
    // console.log(pageCount);

    const handlePageClick = (data) => {
        data.selected = data.selected + 1;
        let to = parseInt(data.selected) * limit;
        let from = parseInt(to) - limit;
        getkittys(from, to)
    }

  return (
    <main class="sc-dkPtRN kCyLCm">
        <div class="Container SearchPage">
            <div class="Container SearchPage--ToolbarDesktop">
                <div class="FiltersMenu-groups">
                    <div class="FiltersMenu-group">
                        <div role="button" class="FiltersMenu-group-title">
                            <div>Kitty type</div>
                            <div>
                                <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g id="icon/plus" stroke="#c4c3c0" stroke-width="1.5"><g id="Group" transform="translate(7.875806, 7.875806) rotate(-360.000000) translate(-7.875806, -7.875806) translate(2.542472, 2.542472)"><path d="M10.6666667,5.33333333 L0,5.33333333" id="Line"></path></g></g></g></svg>
                            </div>
                        </div>
                        <div class="FiltersMenu-group-content">
                            <div class="FiltersMenu-list">
                                <div class="FiltersMenu-list-item FiltersMenu-list-item--isActive" role="button">
                                    <img src={normal} alt="normal" style={{width: "23px"}}/>
                                    <span class="FiltersMenu-list-text--highlighted">CryptoKitties</span>
                                    <div><span>Ξ</span>0.003</div>
                                </div>
                                <div class="FiltersMenu-list-item" role="button">
                                    <img src={fancy} alt="fancy" style={{width: "23px"}}/>
                                    <span>Fancy</span>
                                    <div><span>Ξ</span>0.010</div>
                                </div>
                                <div class="FiltersMenu-list-item" role="button">
                                    <img src={shinyfancy} alt="shinyfancy" style={{width: "23px"}}/>
                                    <span>Shiny Fancy</span><div><span>Ξ</span>5</div>
                                </div>
                                <div class="FiltersMenu-list-item" role="button">
                                    <img src={purrstige} alt="purrstige" style={{width: "23px"}}/>
                                    <span>Purrstige</span><div><span>Ξ</span>0.020</div>
                                </div>
                                <div class="FiltersMenu-list-item" role="button">
                                    <img src={specialedition} alt="specialedition" style={{width: "23px"}}/>
                                    <span>Special Edition</span><div><span>Ξ</span>0.160</div>
                                </div>
                                <div class="FiltersMenu-list-item" role="button">
                                    <img src={exclusive} alt="exclusive" style={{width: "23px"}}/>
                                    <span>Exclusive</span><div><span>Ξ</span>1.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="FiltersMenu-group">
                        <div role="button" class="FiltersMenu-group-title">
                            <div>Mewtations</div>
                            <div>
                                <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g id="icon/plus" stroke="#c4c3c0" stroke-width="1.5"><g id="Group" transform="translate(7.875806, 7.875806) rotate(-360.000000) translate(-7.875806, -7.875806) translate(2.542472, 2.542472)"><path d="M5.33333333,0 L5.33333333,10.6666667" id="Line"></path><path d="M10.6666667,5.33333333 L0,5.33333333" id="Line"></path></g></g></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class="FiltersMenu-group">
                        <div role="button" class="FiltersMenu-group-title">
                            <div>Cooldown</div>
                            <div>
                                <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g id="icon/plus" stroke="#c4c3c0" stroke-width="1.5"><g id="Group" transform="translate(7.875806, 7.875806) rotate(-360.000000) translate(-7.875806, -7.875806) translate(2.542472, 2.542472)"><path d="M5.33333333,0 L5.33333333,10.6666667" id="Line"></path><path d="M10.6666667,5.33333333 L0,5.33333333" id="Line"></path></g></g></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class="FiltersMenu-group">
                        <div role="button" class="FiltersMenu-group-title">
                            <div>Price range</div>
                            <div>
                                <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g id="icon/plus" stroke="#c4c3c0" stroke-width="1.5"><g id="Group" transform="translate(7.875806, 7.875806) rotate(-360.000000) translate(-7.875806, -7.875806) translate(2.542472, 2.542472)"><path d="M5.33333333,0 L5.33333333,10.6666667" id="Line"></path><path d="M10.6666667,5.33333333 L0,5.33333333" id="Line"></path></g></g></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class="FiltersMenu-group">
                        <div role="button" class="FiltersMenu-group-title">
                            <div>Cattributes</div>
                            <div>
                                <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g id="icon/plus" stroke="#c4c3c0" stroke-width="1.5"><g id="Group" transform="translate(7.875806, 7.875806) rotate(-360.000000) translate(-7.875806, -7.875806) translate(2.542472, 2.542472)"><path d="M5.33333333,0 L5.33333333,10.6666667" id="Line"></path><path d="M10.6666667,5.33333333 L0,5.33333333" id="Line"></path></g></g></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class="FiltersMenu-group">
                        <div role="button" class="FiltersMenu-group-title">
                            <div>Color Cattributes</div>
                            <div>
                                <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g id="icon/plus" stroke="#c4c3c0" stroke-width="1.5"><g id="Group" transform="translate(7.875806, 7.875806) rotate(-360.000000) translate(-7.875806, -7.875806) translate(2.542472, 2.542472)"><path d="M5.33333333,0 L5.33333333,10.6666667" id="Line"></path><path d="M10.6666667,5.33333333 L0,5.33333333" id="Line"></path></g></g></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="SearchPage-content SearchPage-content--filtersInvisible">
                <div class="Container SearchPage-SearchKittyGalleryContainer Container--lg">
                    <div class="Toolbar-RowContainer Toolbar-RowContainer--second-row">
                        <button type="button" class="Toolbar-menu-button">
                            <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="24" height="24" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="1.5" transform="matrix(-1 0 0 1 12.48 2.56)" vector-effect="non-scaling-stroke"><g stroke-linecap="round"><path d="M0 1.28h5.04m2.76 0h1.16M0 5.12h1.186m2.86 0H8.96M0 9.28h5.117m2.787 0H8.96"></path></g><circle cx="6.56" cy="1.12" r="1.12"></circle><circle cx="2.72" cy="5.12" r="1.12"></circle><circle cx="6.56" cy="9.12" r="1.12"></circle></g></svg>filters
                        </button>
                        <span class="Toolbar-generation--label">Gen:</span>
                        <div class="Toolbar-generation">
                            <input class="Toolbar-generation-input Number" type="number" min="0" step="1" placeholder="All" value=""/>
                            <div class="Toolbar-generation--reset">
                                <span class="Toolbar-generation--reset-button Toolbar-generation--reset-button--isDisabled" role="button">Reset</span>
                            </div>
                        </div>
                        <div class="SearchBar">
                            <div class="SearchBar-container">
                                <div class="SearchBar-inputContainer">
                                    <div class="SearchBar-icon">
                                        <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/search" class="IconSearch" stroke="#C4C3C0" stroke-width="1.5"><g id="icon-search-copy"><path d="M10.5709785,10.5709785 L10.571001,10.570956 C12.8096551,8.33249161 12.8096551,4.6669393 10.5708661,2.42890911 C8.3332504,0.190344899 4.66769809,0.190344899 2.42890911,2.42913385 C0.190344899,4.6667496 0.190344899,8.33230191 2.42913385,10.5710909 C4.6667496,12.8096551 8.33230191,12.8096551 10.5709785,10.5709785 Z" id="Fill-1"></path><path d="M10.9111111,10.9111111 L13.7555556,13.7555556" id="Line" stroke-linecap="round"></path>/&gt;</g></g></g></svg>
                                    </div>
                                    <input type="text" class="SearchBar-input" placeholder="Search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Toolbar-RowContainer Toolbar-RowContainer--third-row">
                        <div>
                            <div class="SelectionGroup SelectionGroup--display-default">
                                <div class="SelectionGroup-item">
                                    <div role="checkbox" class="Checkbox Checkbox--size-undefined Checkbox--checked Checkbox--disabled" aria-checked="true">
                                        <input id="navigation.tabs.sale" class="Checkbox-input" type="checkbox" disabled="" checked=""/>
                                        <label class="Checkbox-label" for="navigation.tabs.sale">
                                            <span class="Checkbox-label-icon">
                                                <svg class="IconV2 Checkbox-label-iconcheck IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><path fill="none" fill-rule="evenodd" stroke="#EF52D1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5.333 7.023L8.06 10l5.843-7.737a.5.5 0 0 1 .9.301v10.272a2 2 0 0 1-2 2H3.11a2 2 0 0 1-2-2V3.072a2 2 0 0 1 2-2H9.73" vector-effect="non-scaling-stroke"></path></svg>
                                            </span>
                                            <span class="Checkbox-label-text Checkbox-label-text--right">Sale</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="SelectionGroup-item">
                                    <div role="checkbox" class="Checkbox Checkbox--size-undefined" aria-checked="false">
                                        <input id="navigation.tabs.siring" class="Checkbox-input" type="checkbox"/>
                                        <label class="Checkbox-label" for="navigation.tabs.siring">
                                            <span class="Checkbox-label-icon">
                                                <svg class="IconV2 Checkbox-label-iconcheck IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><rect width="14.5" height="14.5" x=".75" y=".75" fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="1.5" rx="3" vector-effect="non-scaling-stroke"></rect></svg>
                                            </span>
                                            <span class="Checkbox-label-text Checkbox-label-text--right">Sire</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="SelectionGroup-item">
                                    <div role="checkbox" class="Checkbox Checkbox--size-undefined" aria-checked="false">
                                        <input id="navigation.tabs.other" class="Checkbox-input" type="checkbox"/>
                                        <label class="Checkbox-label" for="navigation.tabs.other">
                                            <span class="Checkbox-label-icon">
                                                <svg class="IconV2 Checkbox-label-iconcheck IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><rect width="14.5" height="14.5" x=".75" y=".75" fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="1.5" rx="3" vector-effect="non-scaling-stroke"></rect></svg>
                                            </span>
                                            <span class="Checkbox-label-text Checkbox-label-text--right">Other</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="SelectionGroup-item">
                                    <div role="checkbox" class="Checkbox Checkbox--size-undefined" aria-checked="false">
                                        <input id="virgin" class="Checkbox-input" type="checkbox"/>
                                        <label class="Checkbox-label" for="virgin">
                                            <span class="Checkbox-label-icon">
                                                <svg class="IconV2 Checkbox-label-iconcheck IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><rect width="14.5" height="14.5" x=".75" y=".75" fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="1.5" rx="3" vector-effect="non-scaling-stroke"></rect></svg>
                                            </span>
                                            <span class="Checkbox-label-text Checkbox-label-text--right">Mint</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="Toolbar-count">Total:<span>167,286</span></div>
                        <div class="Toolbar-sort">
                            <div class="Toolbar-sort-options">
                                <div class="SelectionGroup SelectionGroup--display-default SelectionGroup--bordered">
                                    <div class="SelectionGroup-item">
                                        <span class="Toolbar-label Toolbar-label--alwaysVisible">Sort by:</span>
                                        <div role="menu" class="Select-container">
                                            <select class="Select" placeholder="">
                                                <option value="current_price">price</option>
                                                <option value="age">age</option>
                                                <option value="generation">gen</option>
                                                <option value="cooldown">cooldown</option>
                                            </select>
                                            <svg class="IconV2 Select-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#c4c3c0" fill-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                    <div class="SelectionGroup-item">
                                        <span class="Toolbar-label Toolbar-label--alwaysVisible">Order by:</span>
                                        <div role="menu" class="Select-container">
                                            <select class="Select" placeholder="">
                                                <option value="asc">low to high</option>
                                                <option value="desc">high to low</option>
                                            </select>
                                            <svg class="IconV2 Select-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#c4c3c0" fill-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Toolbar-RowContainer Toolbar-RowContainer--fifth-row"></div>
                    <div class="KittiesGrid KittiesGrid--colspan-4 BrowseKittyGalley-kittiesGrid">
                        {items.map(item=>
                        <div class="KittyCard KittyCard--display-responsive KittyCard--color-strawberry">
                            <div className="KittyCard-main">
                                <div className="KittyCard-main-container">
                                    <div class="KittyCard-imageContainer KittyCard-imageContainer--shadow">
                                        <img class="KittyCard-image" src={pregnant} alt="2012148"/>
                                    </div>
                                </div>
                                <div className="KittyCard-status">
                                    <button class="CardStatus CardStatus--disabled" type="button" disabled="">
                                        <div class="CardStatusBody CardStatusBody--expanded" data-testid="status-note-pregnant" role="status"><i class="Icon Icon--tag CardStatusBody-icon Icon--tiny"></i>
                                            <div class="CardStatusBody-textWrapper">
                                                <p class="CardStatusBody-title">Buy</p><p class="CardStatusBody-value">0.0034 ETH</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="KittyCard-details">
                                <div className="KittyCard-details-header">
                                    <div class="KittyCard-details-item KittyCard-details-item--highlight">
                                        <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#2A2825" stroke-width="1.5"><path d="M6.472 1.654L4.388 14.346M11.458 1.654L9.374 14.346M14.504 6H1.654M14.502 10.72H1.654"></path></g></g></svg>{item.id}
                                    </div>
                                </div>
                                <div className="KittyCard-details-stats">
                                    <div class="KittyCard-details-item">
                                        <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#c4c3c0" stroke-width="1.5"><path stroke-linecap="round" d="M12 1c0 7.019-8 6.282-8 14M4 1c0 7.019 8 6.282 8 14"></path><path stroke-linecap="square" d="M5 2.5h6M5 13h6M6 5h4M6 10.5h4"></path></g></g></svg><span>Gen 496</span>
                                    </div>
                                    <div class="KittyCard-details-item">
                                        <svg class="IconV2 KittyCard-details-icon IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#c4c3c0" stroke-width="1.5"><circle cx="8" cy="8" r="6.25"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M8 4.5v4.031h3.028"></path></g></g></svg>Catatonic (1w)
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'Pagination'}
                    pageClassName={'Pagination-page'}
                    previousClassName={'Pagination-button'}
                    previousLinkClassName={'Pagination-button'}
                    nextClassName={'Pagination-button'}
                    nextLinkClassName={'Pagination-button'}
                    breakClassName={'Pagination-button'}
                    breakLinkClassName={'Pagination-button'}
                    activeClassName={'Pagination-page--active'}
                    />
                </div>
            </div>
        </div>
    </main>
  )
}
