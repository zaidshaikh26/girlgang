import React from 'react'
import "../styles/newsletter.css"
import marketingOpt_large from "./images/marketingOpt_large.png"

export default function Newsletter() {
  return (
    <main class="sc-dkPtRN kCyLCm">
        <div class="Container">
            <div class="NewsletterPage">
                <div class="NewsletterPage-image">
                    <img alt="Join the Breeder's Club" src={marketingOpt_large} />
                </div>
                <div class="NewsletterPage-content">
                    <h1 class="NewsletterPage-title">Join the Breeder's Club!</h1>
                    <ul class="NewsletterPage-list">
                        <li>Discover the latest Fancy recipes</li>
                        <li>Get notified about community events!</li>
                    </ul>
                    <form class="Form" autocomplete="on">
                        <div class="Form-group"></div>
                        <div class="Form-group">
                            <input autocomplete="on" class="Input Input--block" data-value="" name="email" placeholder="Your email address" required="" type="email" value=""/>
                        </div>
                        <div class="Form-group">
                            <button class="ButtonV2 ButtonV2--size-default ButtonV2--color-pink" type="submit" disabled="">
                                <span class="ButtonV2-children">Subscribe</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}
