import React, { useEffect, useState } from 'react'
import "../../styles/cataloguesub.css"
import ReactPaginate from 'react-paginate';
import content from "../../content/content-data.json"

export default function FancyCats() {

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

    const handlePageClick = (data) => {
        data.selected = data.selected + 1;
        let to = parseInt(data.selected) * limit;
        let from = parseInt(to) - limit;
        getkittys(from, to)
    }

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
            <h2 class="sc-gsDKAQ hfWOXG">Fancy Cats</h2>
            <div class="SpecialKittiesCategoryDetails">
                <div class="SpecialKittiesGrid">
                    {items.map(item=>
                    <a class="SpecialKittyCard-link" href="">
                        <div class="SpecialKittyCard">
                            <div class="SpecialKittyCard-header">
                                <div class="SpecialKittyCard-header-row">
                                    <div>
                                        <div class="SpecialKittyCard-title">Tarun {item.id}</div>
                                    </div>
                                </div>
                                <div class="SpecialKittyCard-header-row">
                                    <div class="SpecialKittyCard-txt">Fancy</div>
                                    <div class="SpecialKittyCard-stats">
                                        <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="18" height="18" viewBox="0 0 16 16"><path d="M6,5.75 L10,5.75 C11.1045695,5.75 12,6.6454305 12,7.75 L12,11.75 C12,12.8545695 11.1045695,13.75 10,13.75 L6,13.75 C4.8954305,13.75 4,12.8545695 4,11.75 L4,7.75 C4,6.6454305 4.8954305,5.75 6,5.75 Z" stroke="#49B749" stroke-width="1.35" fill="none"></path><path d="M14.5555556,4.39649357 L14.5555556,3.77777778 C14.5555556,2.3970659 13.4362674,1.27777778 12.0555556,1.27777778 C10.6748437,1.27777778 9.55555556,2.3970659 9.55555556,3.77777778 L9.55555556,4.39649357" stroke="#49B749" stroke-width="1.5" fill="none"></path><circle fill="#49B749" cx="8" cy="8.66666667" r="1.11111111"></circle><path d="M8,9.33333333 L8,11.1111111" stroke="#49B749" stroke-width="1.25" stroke-linecap="round"></path></svg>
                                        <div class="SpecialKittyCard-txt" style={{color: "rgb(73, 183, 73)"}}>
                                            <span>2400 left</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="SpecialKittyCard-image" style={{backgroundColor: "rgb(211, 232, 255)"}}>
                                <img class="" src="https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/2012189.png" alt="Kitty Tarun"/>
                            </div>
                            <div class="SpecialKittyCard-footer SpecialKittyCard-txt">
                                <span>Find a Tarun</span>
                                <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="18" height="18" viewBox="0 0 16 16"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/search" class="IconSearch" stroke="#c4c3c0" stroke-width="1.5"><g id="icon-search-copy"><path d="M10.5709785,10.5709785 L10.571001,10.570956 C12.8096551,8.33249161 12.8096551,4.6669393 10.5708661,2.42890911 C8.3332504,0.190344899 4.66769809,0.190344899 2.42890911,2.42913385 C0.190344899,4.6667496 0.190344899,8.33230191 2.42913385,10.5710909 C4.6667496,12.8096551 8.33230191,12.8096551 10.5709785,10.5709785 Z" id="Fill-1"></path><path d="M10.9111111,10.9111111 L13.7555556,13.7555556" id="Line" stroke-linecap="round"></path>/&gt;</g></g></g></svg>
                            </div>
                        </div>
                    </a>
                    )}
                </div>
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
            pageLinkClassName={'catalogue-link'}
            previousClassName={'Pagination-button'}
            previousLinkClassName={'catalogue-link'}
            nextClassName={'Pagination-button'}
            nextLinkClassName={'catalogue-link'}
            breakClassName={'Pagination-button'}
            breakLinkClassName={'Pagination-button'}
            activeClassName={'Pagination-page--active'}
            />
        </div>
    </main>
  )
}
