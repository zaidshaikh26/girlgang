import React, { useEffect, useState } from 'react'
import "../../styles/cataloguesub.css"
import specialEditionCats1 from "../images/special-edition-cats1.png"
import ReactPaginate from 'react-paginate';
import content from "../../content/content-data.json"

export default function SpecialEditionCats() {

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
            <h2 class="sc-gsDKAQ hfWOXG">Special Edition Cats</h2>
            <div class="SpecialKittiesCategoryDetails">
                <div class="SpecialKittiesGrid">
                    {items.map(item=>
                    <a class="SpecialKittyCard-link" href="">
                        <div class="SpecialKittyCard">
                            <div class="SpecialKittyCard-header">
                                <div class="SpecialKittyCard-header-row">
                                    <div>
                                        <div class="SpecialKittyCard-title">FrostyMcWhiskers {item.id}</div>
                                    </div>
                                </div>
                                <div class="SpecialKittyCard-header-row">
                                    <div class="SpecialKittyCard-txt">Special Edition</div>
                                    <div class="SpecialKittyCard-stats">
                                        <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="18" height="18" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><polygon stroke="#c4c3c0" stroke-width="1.5" points="8 11.2561366 4.29179607 13.5 5.36000001 9.40742115 2 6.70162612 6.36839028 6.41613666 8 2.5 9.63160972 6.41613666 14 6.70162612 10.64 9.40742115 11.7082039 13.5"></polygon></g></svg>
                                        <div class="SpecialKittyCard-txt" style={{color: "rgb(73, 183, 73)"}}>
                                            <span>104 total</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="SpecialKittyCard-image" style={{backgroundColor: "rgb(211, 232, 255)"}}>
                                <img class="" src={specialEditionCats1} alt="Kitty Tarun"/>
                            </div>
                            <div class="SpecialKittyCard-footer SpecialKittyCard-txt">
                                <span>Find a FrostyMcWhiskers</span>
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
