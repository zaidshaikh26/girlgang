import React from 'react'
import Guide from '../../components/guide'
import CK_GitbookGraphics_KittyTypes1 from "../images/CK_GitbookGraphics_KittyTypes1.png"

export default function KittyTypes() {
  return (
    <>
    <Guide/>
    <div class="Guide">
        <h2 class="sc-gsDKAQ hfWOXG">Kitty Types</h2>
        <p>Cats come in many shapes and styles, and we love them all. There are four official types of CryptoKitties: Normal, Fancy, Special Edition and Exclusive. A Normal cat’s appearance is based on its genetic Cattributes. Fancy Cats have unique art and are created by finding a particular genetic recipe, although their appearance may not reflect the actual Cattribute traits within that recipe. Exclusives are the rarest Kitties, released to commemorate special events and community members. Next sections will go into more detail about the characteristics of each type of CryptoKitty.</p>
        <img src={CK_GitbookGraphics_KittyTypes1} alt="Kitty Types"/>
    </div>
    </>
  )
}
