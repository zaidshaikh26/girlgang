import "../styles/blog.css"
import { Link } from "react-router-dom";
import React from 'react'
import blog1 from "./images/image.webp"
import ckupdates from "./images/ck-updates.webp"
import logo from "./images/logo.svg"

export default function Blog() {

    const numberstwo = [65, 44, 12, 4,65, 44];
    const numbersthree = [65, 44, 12, 4];

  return (
    <main>
        <div class="ArticleFeed">
            <div class="Container Container--md">
                <section>
                    <h1 class="ArticleFeed-header">News and Updates</h1>
                    <div class="ArticleFeed-grid">
                        {numberstwo.map(founder=>
                        <span>
                            <article class="ArticlePreview">
                                <a href="">
                                    <div class="ArticlePreview-main" style={{position:"relative", overflow:"hidden"}}>
                                        <div class=" gatsby-image-wrapper">
                                            <div aria-hidden="true" style={{width:"100%",paddingBottom:"54.64601769911505%"}}>
                                                <img sizes="(max-width: 904px) 100vw, 904px" src={blog1} alt="The 2 millionth Kitty and the last Gale! image" loading="lazy" style={{position: "absolute", top:" 0px, left: 0px", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", opacity: "1", transition: "opacity 500ms ease 0s"}}></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <h2 class="ArticlePreview-title">The 2 millionth Kitty and the last Gale!</h2>
                                    <h3 class="ArticlePreview-subtitle">Congratulations to our community member, CryptoKittyMagic, for breeding the 2,000,000th CryptoKitty - a Pumpernickel Exclusive! </h3>
                                    <div class="ArticlePreview-timestamp"><time datetime="2021-06-04T22:00+00:00">Jun 05</time></div>
                                </a>
                            </article>
                        </span>
                        )}
                    </div>
                </section>
                <div class="LoadMore">
                    <button class="ButtonV2 ButtonV2--size-section ButtonV2--color-default ButtonV2--flat" type="button">
                        <span class="ButtonV2-children">load more</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="PopularTopics">
            <div class="Container Container--md">
                <h2 class="PopularTopics-header">Popular Topics</h2>
                <div class="PopularTopics-grid">
                    {numbersthree.map(founder=>
                    <span>
                        <div class="PopularTopic">
                            <a href="">
                                <div class="PopularTopic-main">
                                    <div class="gatsby-image-wrapper">
                                        <div aria-hidden="true" style={{width:"100%",paddingBottom:"87.73584905660377%"}}>
                                            <img sizes="(max-width: 904px) 100vw, 904px" src={ckupdates} alt="The 2 millionth Kitty and the last Gale! image" loading="lazy" style={{position: "absolute", top:" 0px, left: 0px", width: "100%", height: "67%", objectFit: "cover", objectPosition: "center center", opacity: "1", transition: "opacity 500ms ease 0s"}}></img>
                                        </div>
                                    </div>
                                    <div class="PopularTopic-icon">
                                        <img src={logo} alt="How To icon"/>
                                    </div>
                                    <h2 class="PopularTopic-title">How To</h2>
                                </div>
                            </a>
                        </div>
                    </span>
                    )}
                </div>
            </div>
        </div>
        <div class="Hero">
            <div class="Container Container--sm Container--center">
                <div class="Newsletter">
                    <div class="Newsletter-icon">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTYiIGhlaWdodD0iOTciIHZpZXdCb3g9IjAgMCA5NiA5NyI+CiAgICA8ZGVmcz4KICAgICAgICA8Y2lyY2xlIGlkPSJhIiBjeD0iNDEuNzEyIiBjeT0iNDIuMjEyIiByPSI0MS41NjgiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJiIiB3aWR0aD0iMTE1LjYlIiBoZWlnaHQ9IjExNi44JSIgeD0iLTcuOCUiIHk9Ii03LjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICAgICAgICA8ZmVNb3JwaG9sb2d5IGluPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9ImRpbGF0ZSIgcmFkaXVzPSI2IiByZXN1bHQ9InNoYWRvd1NwcmVhZE91dGVyMSIvPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHk9IjEiIGluPSJzaGFkb3dTcHJlYWRPdXRlcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC45NTI0MDc1MjYgMCAwIDAgMCAwLjk0NjU1NDE1OCAwIDAgMCAwIDAuOTMzMTg1NzU5IDAgMCAwIDEgMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxwYXRoIGlkPSJkIiBkPSJNMCAzNS41NTR2MzUuMTcxaDcyLjQ1Vi4zODNIMHoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNiA2KSI+CiAgICAgICAgPG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2IpIiB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQxLjcxMiIgY3k9IjQyLjIxMiIgcj0iNDQuNTY4IiBmaWxsPSIjRkZEOUZGIiBzdHJva2U9IiNGM0YxRUUiIHN0cm9rZS13aWR0aD0iNiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQxLjcxMiIgY3k9IjQyLjIxMiIgcj0iNDMuNTY4IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iNCIvPgogICAgICAgIDxnIG1hc2s9InVybCgjYykiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1IDYuMzQyKSI+CiAgICAgICAgICAgICAgICA8bWFzayBpZD0iZSIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjZCIvPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRDlGRiIgZD0iTTcyLjQ1IDM1LjU1NWMwIDE5LjQyNS0xNi4yMTggMzUuMTctMzYuMjI1IDM1LjE3UzAgNTQuOTggMCAzNS41NTZDMCAxNi4xMyAxNi4yMTguMzg0IDM2LjIyNS4zODRTNzIuNDUgMTYuMTMgNzIuNDUgMzUuNTU0IiBtYXNrPSJ1cmwoI2UpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRTg4OCIgZD0iTTU0LjkwNyA2Mi4yNzZjNC42MTMtNC4yNjggNy4wMzEtNy41MDQgNy4wMzEtNy41MDQgMi43MTQuNTc4IDQuMjktLjM5MyA0LjI5LS4zOTMtMi4zMTMtMi4wMjUtMy4wNzQtMy4zODEtMy4wNzQtMy4zODEgMy4xNjQgMS4yODMgNS44NDgtLjUzIDUuODQ4LS41M3MtNS41OC0zLjExLTYuMzc0LTUuNjAyYy0yLjkzOC05LjIyNC0yLjcxMy0xMC4wNi0yLjcxMy0xMC4wNiAxLjYzNS00LjQ1OCAzLjA1Ni05LjU3IDEuNzYzLTExLjIzNy0xLjY2NS0yLjE0NC0zLjczNSAxLjIxNi04Ljg2MiA0LjY3MyAwIDAtMy4wNzQtMi45My0xMS4zMi0yLjkzLTUuNDUgMC0xMC45NDYgMi45OC0xMC45NDYgMi45OC0yLjM0My0xLjcyMi0zLjg3LTMuMzE0LTUuNzI5LTQuMzkyLTIuODM3LTEuNjQyLTQuMTc0LS4xNDEtMy4xMjQgMy40NjUuNDI1IDEuNDYgMS4wOTIgNC42NTEgMS43NTMgNy40OTIuNDc2IDIuMDQ2LS4wNCAxLjU2OC0xLjY1NiA3LjgzMi0uMTg2LjcxOS0xLjE3NyAyLjY4Ny0yLjI0IDQuMzI0LTEuODAzIDIuNzgtNS4yMjQgMy40NTUtNS4yMjQgMy40NTVzMi42ODQgMS44MTMgNS44NDguNTNjMCAwLS43NiAxLjM1Ni0zLjA3NCAzLjM4MSAwIDAgMS41NzguOTcxIDQuMjkuMzkzIDAgMCAxLjU2IDQuMTk1IDYuNzE1IDcuMTU5IDAgMCAzLjQ4IDQuMDczIDEzLjM5NiA0LjA3MyA4Ljk1MyAwIDEzLjQwMi0zLjcyOCAxMy40MDItMy43MjgiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0VBQkE1QyIgZD0iTTMzLjUxMyAyNi43MTZzLTEwLjA1MSA5LjUzOC04LjcyMSAyMi41MzRjMS40NjMgMTQuMzAyIDE2LjcxNSAxNi43NTMgMTYuNzE1IDE2Ljc1M3MtMTIuMTEzLjY0OS0yMC4xMTMtMTEuMjNjMCAwLTIuODk4IDEuMDM1LTQuMjktLjM5NSAwIDAgMi42MDQtMS42NzYgMy4wNzMtMy4zOCAwIDAtMi42NTggMS4zOC01Ljg0Ny0uNTI4IDAgMCAzLjY0OC0uNjk2IDUuOTA0LTQuNTY4IDMuMjc4LTUuNjI5IDMuMzU0LTE0LjgyNyAxMy4yOC0xOS4xODYiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0VBQkE1QyIgZD0iTTI4LjkxNiAyOS45NzNzLTIuMDEtMS42NS00LjI4NS0zLjM1Yy0xLjc5Mi0xLjM0Mi0yLjYwMy0xLjM3Ny0zLjA1LjExMmwyLjExOSA4Ljg2MyAxLjkzNS0xLjIzMyAxLjU4OS0yLjYyNCAxLjY5Mi0xLjc2OHpNNTQuNDcgMjkuOTczczIuMDEyLTEuNjUgNC4yODYtMy4zNWMxLjc5Mi0xLjM0MiAyLjYwMy0xLjM3NyAzLjA1MS4xMTJsLTIuMTIgOC44NjMtMS45MzUtMS4yMzMtMS41ODktMi42MjQtMS42OTItMS43Njh6Ii8+CiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iIzQ0MzkyRSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMDg4IiBkPSJNMjEuMzk0IDU0Ljc3M2MtMi43MTMuNTc4LTQuMjktLjM5NS00LjI5LS4zOTUgMi4zMTMtMi4wMjQgMy4wNzQtMy4zOCAzLjA3NC0zLjM4LTMuMTY0IDEuMjg0LTUuODQ4LS41My01Ljg0OC0uNTNzMy45Mi0uNjkgNS45MDUtNC41NjdjMS4zOTQtMi43MjUgMy4yNDUtOC4wOTUgNC43MzktMTAuODIgMy44NC02Ljk5NiA4LjgzNy05Ljc2OCAxNi41MjMtOS43NjggNy4xMzggMCAxMy4wNyAyLjc3MiAxNi45MSA5Ljc2OSAxLjQ5NCAyLjcyNCAzLjM0NSA4LjA5NCA0Ljc0IDEwLjgyIDEuOTgzIDMuODc3IDUuOTA0IDQuNTY3IDUuOTA0IDQuNTY3cy0yLjY4NCAxLjgxMy01Ljg0OC41M2MwIDAgLjc2IDEuMzU1IDMuMDc0IDMuMzc5IDAgMC0xLjU3OC45NzMtNC4yOS4zOTUgMCAwLTcuMDEyIDExLjIzMS0yMC4yOTYgMTEuMjMxLTEzLjI0MiAwLTIwLjI5Ny0xMS4yMzEtMjAuMjk3LTExLjIzMXoiLz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDQzOTJFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4wODciIGQ9Ik0zMC4xOTQgMjguMDJzLTQuMjMzLTMuMjM4LTUuMzczLTQuMTJjLTIuMDctMS42MDMtNC4xNy0uODM2LTMuMzcgMi40NS41MzIgMi4xOCAyLjI0OCA5LjI0OCAyLjI0OCA5LjI0OE01Mi44MTYgMjguMjRzNC41ODgtMy41MDggNS43MjgtNC4zOWMyLjA3LTEuNjA1IDQuMTctLjgzNiAzLjM2OCAyLjQ1LS41MzIgMi4xOC0yLjIyNCA5LjI5OC0yLjIyNCA5LjI5OCIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzUuNTMgNDAuODc1YTcuMDc2IDcuMDc2IDAgMSAxLTE0LjE1MiAwIDcuMDc2IDcuMDc2IDAgMCAxIDE0LjE1MiAwIi8+CiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iIzQ0MzkyRSIgc3Ryb2tlLXdpZHRoPSIxLjA4NyIgZD0iTTM1LjUzIDQwLjg3NWE3LjA3NiA3LjA3NiAwIDEgMS0xNC4xNTIgMCA3LjA3NiA3LjA3NiAwIDAgMSAxNC4xNTIgMHoiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzQ0MzkyRSIgZD0iTTMyLjg0MyA0MC42MmE0LjM0NiA0LjM0NiAwIDEgMS04LjY5NCAwIDQuMzQ4IDQuMzQ4IDAgMSAxIDguNjk0IDAiLz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjRjkzMEU3IiBzdHJva2Utd2lkdGg9Ii45NDUiIGQ9Ik0zMi44NDMgNDAuNjJhNC4zNDYgNC4zNDYgMCAxIDEtOC42OTQgMCA0LjM0OCA0LjM0OCAwIDEgMSA4LjY5NCAweiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzAuNDggMzcuNzc2YTIuMDQ0IDIuMDQ0IDAgMCAxLTIuMTU4IDEuOTEgMi4wMjUgMi4wMjUgMCAwIDEtMS45MDQtMi4xNDkgMi4wNDUgMi4wNDUgMCAwIDEgMi4xNTgtMS45MSAyLjAyNCAyLjAyNCAwIDAgMSAxLjkwNCAyLjE0OU02Mi4wNTEgNDAuODc1YTcuMDc3IDcuMDc3IDAgMSAxLTE0LjE1NC0uMDAyIDcuMDc3IDcuMDc3IDAgMCAxIDE0LjE1NC4wMDIiLz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDQzOTJFIiBzdHJva2Utd2lkdGg9IjEuMDg3IiBkPSJNNjIuMDUxIDQwLjg3NWE3LjA3NyA3LjA3NyAwIDEgMS0xNC4xNTQtLjAwMiA3LjA3NyA3LjA3NyAwIDAgMSAxNC4xNTQuMDAyeiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjNDQzOTJFIiBkPSJNNTkuMzY0IDQwLjk0NmE0LjM0NyA0LjM0NyAwIDEgMS04LjY5NCAwIDQuMzQ2IDQuMzQ2IDAgMSAxIDguNjk0IDAiLz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjRjkzMEU3IiBzdHJva2Utd2lkdGg9Ii45NDUiIGQ9Ik01OS4zNjQgNDAuOTQ2YTQuMzQ3IDQuMzQ3IDAgMSAxLTguNjk0IDAgNC4zNDYgNC4zNDYgMCAxIDEgOC42OTQgMHoiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTU3LjAwMSAzOC4xYTIuMDQ2IDIuMDQ2IDAgMCAxLTIuMTU4IDEuOTE0IDIuMDI3IDIuMDI3IDAgMCAxLTEuOTA0LTIuMTUxIDIuMDQ1IDIuMDQ1IDAgMCAxIDIuMTU4LTEuOTEyQTIuMDI2IDIuMDI2IDAgMCAxIDU3IDM4LjEwMSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjNDQzOTJFIiBkPSJNNDUuNzUzIDUzLjEyMmMwIDIuMjI1LTEuNzgzIDQuNjcxLTMuOTgzIDQuNjcxLTIuMTk5IDAtMy45ODMtMi40MzktMy45ODMtNC42NjJsMy45NzUtMi4zMzMgMy45OTEgMi4zMjR6Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGOTMwRTciIGQ9Ik00NC45OTMgNTUuODgzYTQuNDg4IDQuNDg4IDAgMCAwLTYuNDk1LjA2bDMuMjc2IDEuNDIgMy4yMTktMS40OHoiLz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDQzOTJFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iLjc3NSIgZD0iTTM5LjAwNCA1NS43NDVjLjUwNC0uNjE4IDEuNTU0LTEuMDQyIDIuNzY5LTEuMDQyIDEuMDEyIDAgMS45MTEuMjkzIDIuNDc0Ljc1Ii8+CiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuOTUiIGQ9Ik00MS40OSA1Mi4wMDNoLjU4Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM0NDM5MkUiIGQ9Ik01Mi4xMSA1Mi4yNTZjLS45MDguNzgyLTIuMDc0IDEuMjI1LTMuMjUgMS4zOGE4Ljg3IDguODcgMCAwIDEtMy41MzQtLjI2N2MtMS4xNDItLjMzMy0yLjI3LS44NTctMy4xNy0xLjc4Ni0uNDM4LS40NjQtLjgyLTEuMDU1LS45NTYtMS43NjItLjA2OS0uMzgtLjA2LS42ODktLjA3Mi0uOTUzbC0uMDMxLS44NWEuNjc1LjY3NSAwIDEgMSAxLjM0OS0uMDQ3di4wNDdsLS4wMzEuODVjLS4wMS4zMDItLjAyNi41NjQgMCAuNzQ3LjA1LjQxOC4yNjcuODM5LjU4MyAxLjIxNS42MzguNzUyIDEuNiAxLjMwNCAyLjYwNCAxLjY1NiAyLjAwNS42OSA0LjQzNS42ODEgNi4xODMtLjYzYS4yNTYuMjU2IDAgMCAxIC4zNi4wNDguMjYyLjI2MiAwIDAgMS0uMDM2LjM1MiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjNDQzOTJFIiBkPSJNMzIuMjMgNTEuODgyYy44MS42ODggMS44NzggMSAyLjkzNyAxLjA0MmE3LjY1OCA3LjY1OCAwIDAgMCAzLjEyMS0uNTY0Yy45Ny0uMzk1IDEuODktLjk5NSAyLjQzLTEuNzc4LjI3MS0uMzg5LjQxNS0uODEzLjQwNC0xLjIxN2wtLjAyNi0xLjY2NmEuNjc1LjY3NSAwIDAgMSAxLjM1LS4wMjR2LjAyNGwtLjAzNCAxLjdjLS4wMzYuNzIyLS4zNDUgMS4zOC0uNzUyIDEuODgzLS44MjYgMS4wMTQtMS45MzUgMS41ODMtMy4wNTMgMS45NjFhOC40NTcgOC40NTcgMCAwIDEtMy40OTMuMzgxYy0xLjE2Ni0uMTI1LTIuMzQ2LS41NTgtMy4yMDItMS4zOTdhLjIzMy4yMzMgMCAwIDEtLjAwMy0uMzMxLjIzOC4yMzggMCAwIDEgLjMyLS4wMTQiLz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDQzOTJFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4xNzEiIGQ9Ik00NS43NTMgNTMuNjc0YzAgMS44MzItMS43ODMgMy42OS0zLjk4MyAzLjY5LTIuMTk5IDAtMy45ODMtMS44NTgtMy45ODMtMy42OSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjNDQzOTJFIiBkPSJNMzguMzk3IDQ3LjY3NmEuODEyLjgxMiAwIDAgMSAuMTg1LS44NDdjLjQ2LS40NyAxLjQ1LTEuMTU2IDMuMjg2LTEuMTcxIDEuODA0LS4wMTQgMi43MDguNjQ1IDMuMTI0IDEuMTEyYS44MTMuODEzIDAgMCAxIC4xMy44NTggMS4wNyAxLjA3IDAgMCAxLS45NDEuNjU3Yy0uNTE4LjAxNy0xLjIzMy4xOC0xLjY4NS44NDdhLjYyNS42MjUgMCAwIDEtLjA5Ny4xMTVsLS4wMTUuMDE2YS44OTEuODkxIDAgMCAxLTEuMzA2LS4wNzRzLS4zNzUtLjY2NC0xLjc2Mi0uNzc1YTEuMDc0IDEuMDc0IDAgMCAxLS45MTItLjcybC0uMDA3LS4wMTh6TTM2LjQ3NyA0OS4xOTVjLTIuNTk0LS41MzEtNS4zMy0uNTctNy44OS4yMTYtMi41NTguNzYyLTQuODU2IDIuNDE1LTYuNDM2IDQuNjMzYTEyLjU0MiAxMi41NDIgMCAwIDEgNi4yODMtNS4wODdjMi42MDEtLjk3IDUuNDY2LTEuMSA4LjIxLS43MDUuMjYxLjA0LjQ0NC4yOC40MDYuNTQ1YS40OC40OCAwIDAgMS0uNTQzLjQwM2MtLjAwOSAwLS4wMi0uMDAzLS4wMy0uMDA1Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM0NDM5MkUiIGQ9Ik0zNi41NiA1MC4zNjNjLTEuNzg4LS4wNzUtMy42NDYuMDEzLTUuMTgxLjkxNi0xLjU2NS44ODEtMi40MTQgMi42NzItMi43NDMgNC40NjYuMTA1LS45MTMuMjk2LTEuODMuNjkyLTIuNjg0YTUuNDQ5IDUuNDQ5IDAgMCAxIDEuNzktMi4xOGMxLjU5NC0xLjEyOSAzLjU5Mi0xLjM4NCA1LjQ0Mi0xLjQ2OWEuNDc3LjQ3NyAwIDAgMSAuMDQzLjk1aC0uMDQzek00Ni44NTIgNDguMjUyYzIuNzQzLS4zOTUgNS42MDgtLjI2NCA4LjIxLjcwNWExMi41NDYgMTIuNTQ2IDAgMCAxIDYuMjgzIDUuMDg2Yy0xLjU4LTIuMjE3LTMuODgtMy44Ny02LjQzNy00LjYzMi0yLjU1OS0uNzg1LTUuMjk2LS43NDctNy44OS0uMjE1YS40OC40OCAwIDAgMS0uMTk2LS45MzlsLjAzLS4wMDUiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzQ0MzkyRSIgZD0iTTQ2LjkzNSA0OS40MTNjMS44NS4wODQgMy44NDguMzQgNS40NDIgMS40N2E1LjQ0OSA1LjQ0OSAwIDAgMSAxLjc5IDIuMTc4Yy4zOTYuODUyLjU4OSAxLjc3MS42OTQgMi42ODQtLjMzMS0xLjc5NC0xLjE3OC0zLjU4NS0yLjc0NC00LjQ2Ni0xLjUzNi0uOTAyLTMuMzkzLS45OS01LjE4Mi0uOTE2YS40NzcuNDc3IDAgMCAxLS40OTctLjQ1NC40OC40OCAwIDAgMSAuNDU0LS40OTZoLjA0M3oiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="CryptoKitties Newsletter Signup Icon"/>
                    </div>
                    <h2 class="Newsletter-title Hero-h3">Join the CryptoKitties Breeders' Club</h2>
                    <div class="Newsletter-subtitle">Get access to the weekly newsletter all the Kitties are purring about. Be the first to know about contests, events, and other tasty&nbsp;treats.</div>
                    <form class="Form">
                        <div class="Form-group">
                            <input type="email" autocomplete="on" class="Input Input--block" data-value="" name="email" placeholder="Your email address" required="" value=""/>
                        </div>
                        <div class="Form-group">
                            <button class="ButtonV2 ButtonV2--size-section ButtonV2--color-pink" type="submit" disabled=""><span class="ButtonV2-children">Enter Meow!</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}
