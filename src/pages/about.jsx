import "../styles/about.css"
import { Link } from "react-router-dom";
import React from 'react'
import logo from "./images/logo.svg"
import press from "./images/press.svg"
import wrench from "./images/wrench.svg"
import paper from "./images/paper.svg"
import roham from "./images/roham.jpeg"
import profile from "./images/profile-13.png"
import letterHead from "./images/letterHead.png"

export default function About() {

    const numberstwo = [65, 44, 12, 4,65, 44,65, 44, 12, 4,65, 44];
    const numbersthree = [65, 44, 12, 4,65, 44];

  return (
    <main class="sc-dkPtRN kCyLCm">
        <div class="AboutPage">
            <div class="SubpageNav">
                <a class="SubpageNav-btn" href="/about"><img src={logo} alt="Logo"/>About</a>
                <a class="SubpageNav-btn" href="/press"><img src={press} alt="Press"/>Press</a>
                <a class="SubpageNav-btn" href="/technical-details"><img src={wrench} alt="Details"/>Technical Details</a>
                <a href="https://drive.google.com/open?id=1soo-eAaJHzhw_XhFGMJp3VNcQoM43byS" target="_blank" rel="noopener noreferrer" class="SubpageNav-btn"><img src={paper} alt="White paper"/>White Pa-purr</a>
            </div>
            <div class="AboutPage-section">
                <div class="AboutPage-header">
                    <div class="AboutPage-letterHead">
                        <img src={letterHead} alt="Letter head"/>
                    </div>
                    <p class="AboutPage-bodyText">In CryptoKitties, users collect and breed oh-so-adorable creatures that we call CryptoKitties! Each kitty has a unique genome that defines its appearance and traits. Players can breed their kitties to create new furry friends and unlock rare cattributes.</p>
                    <p class="AboutPage-bodyText">CryptoKitties is one of the world’s first blockchain games. ‘Blockchain’ is the technology that makes things like Bitcoin possible. While CryptoKitties isn’t a digital currency, it does offer the same security: each CryptoKitty is one-of-a-kind and 100% owned by you. It cannot be replicated, taken away, or destroyed.</p>
                </div>
            </div>
            <div class="AboutPage-section">
                <h4 class="AboutPage-label">CryptoKitties Team</h4>
                <div class="AboutPage-team">
                    {numberstwo.map(founder=>
                    <div class="AboutPage-teamMember">
                        <div class="AboutPage-teamPhoto">
                            <img src={roham} alt="Team photo"/>
                            <img class="AboutPage-teamPhotoHover" src={profile} alt="Team photo"/>
                        </div>
                        <p><strong>Roham Gharegozlou</strong><br/>CEO</p>
                    </div>
                    )}
                </div>
            </div>
            <div class="AboutPage-section">
                <h4 class="AboutPage-label">Cats we miss...</h4>
                <div class="AboutPage-team">
                    {numbersthree.map(founder=>
                    <div class="AboutPage-teamMember">
                        <div class="AboutPage-teamPhoto">
                            <img src={roham} alt="Team photo"/>
                            <img class="AboutPage-teamPhotoHover" src={profile} alt="Team photo"/>
                        </div>
                        <p><strong>Jordan Castro</strong><br/>Product</p>
                    </div>
                    )}
                </div>
            </div>
            <div class="AboutPage-section">
                <h4 class="AboutPage-label">THE CRYPTOKITTIES CATIFESTO</h4>
                <h2 class="AboutPage-headline">What we believe in, what we stand for, and why we’re building CryptoKitties.</h2>
                <div class="AboutPage-columns">
                    <p class="AboutPage-bodyText"><strong>The future is exciting.</strong></p>
                    <p class="AboutPage-bodyText">And we believe that blockchain is the future—but blockchain is about as approachable as a bunch of ones and zeroes.</p>
                    <p class="AboutPage-bodyText">We want a future for everyone, not one exclusive to Bitcoin miners, VCs, ICOs, and other equally fun acronyms.</p>
                    <p class="AboutPage-bodyText"><strong>So why cats?</strong></p>
                    <p class="AboutPage-bodyText">Pop quiz, hotshot: why not?</p>
                    <p class="AboutPage-bodyText">Cats are impossible to understand. They’re ambassadors for pharaohs, memes, and your mom’s facebook page. They don’t discriminate; they despise everyone equally.</p>
                    <p class="AboutPage-bodyText">Cats are perfect killing machines, with retractable claws, night vision, and teeth on their tongue. But cats also nap whenever they feel like it, and we respect that.</p>
                    <p class="AboutPage-bodyText">More than anything, cats are different. They’re weird, funny, and hopelessly entertaining. You don’t have to understand cats to appreciate them.</p>
                    <p class="AboutPage-bodyText">We’re not trying to build the future—we’re trying to have fun with it.</p>
                </div>
                <p class="AboutPage-signature">The future is meow.</p>
            </div>
        </div>
    </main>
  )
}
