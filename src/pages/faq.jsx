import React from 'react'
import "../styles/faq.css"
import kitty_confused_banner from "./images/kitty-confused-banner.svg"

export default function Faq() {
  return (
    <main class="sc-dkPtRN kCyLCm">
        <div class="FaqPage">
            <div class="FaqBanner">
                <div class="FaqBanner-Kitty"><img src={kitty_confused_banner} alt="FAQs"/></div>
            </div>
            <div class="Container Container--sm">
                <div class="FaqGroup"><h2 class="FaqGroup-title">What do I need to play?</h2>
                    <div class="FaqGroup-questions"></div>
                </div>
                <div class="FaqGroup"><h2 class="FaqGroup-title">Buying and selling</h2>
                    <div class="FaqGroup-questions"></div>
                </div>
                <div class="FaqGroup"><h2 class="FaqGroup-title">Breeding</h2>
                    <div class="FaqGroup-questions"></div>
                </div>
                <div class="FaqGroup"><h2 class="FaqGroup-title">Cat Guide</h2>
                    <div class="FaqGroup-questions"></div>
                </div>
                <div class="FaqGroup"><h2 class="FaqGroup-title">Transactions and Technical Questions</h2>
                    <div class="FaqGroup-questions"></div>
                </div>
                <div class="FaqGroup"><h2 class="FaqGroup-title">Community</h2>
                    <div class="FaqGroup-questions"></div>
                </div>
            </div>
        </div>
    </main>
  )
}
