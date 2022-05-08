import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import content from "../content/content-data.json"
import "../styles/pregnant.css"
import pregnant from "./images/pregnant.svg"

export default function Pregnant() {

    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setlimit] = useState(10);
    const numbers = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];

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
        <div class="sc-hKwDye sc-jRQBWg hOrZdU grmCxQ">
            <h2 class="sc-gsDKAQ jRETxg">Pregnant <b>Total: {totalCount}</b></h2>
            <div class="sc-eCImPb sc-gKclnd jGfYPQ bEOvQm">
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
                                <div class="CardStatusBody CardStatusBody--expanded" data-testid="status-note-pregnant" role="status"><i class="Icon Icon--pregnant CardStatusBody-icon Icon--tiny"></i>
                                    <div class="CardStatusBody-textWrapper">
                                        <p class="CardStatusBody-title">Preggers</p><p class="CardStatusBody-value">2 days</p>
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
        </div>
        <div class="sc-hKwDye sc-jRQBWg hOrZdU grmCxQ">
            {/* <div class="Pagination GalleryPagination">
                <div class="Pagination-pages">
                    <button type="button" class="Pagination-page Pagination-page--active">1</button>
                    <button type="button" class="Pagination-page">2</button>
                </div>
                <div>
                    <button type="button" class="Pagination-button Pagination-button--disabled">Previous</button>
                    <button type="button" class="Pagination-button">Next</button>
                </div>
            </div> */}
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
    </main>
  )
}
