import React from 'react'
import Guide from '../../components/guide'
import CK_GitbookGraphics_Gas1 from "../images/CK_GitbookGraphics_Gas1.png"
import CK_GitbookGraphics_Gas2 from "../images/CK_GitbookGraphics_Gas2.png"
import cattutor from "../images/cattutor-july-1718-tutor-copy@3x.png"

export default function Gas() {
  return (
    <>
    <Guide/>
    <div class="Guide">
        <h2 class="sc-gsDKAQ hfWOXG">Gas &amp; Fees</h2>
        <p>Sending some transactions on the Ethereum network? Here’s what’s going on under the hood.</p>
        <p>Whenever you buy, breed, and create or cancel an auction, your request gets sent to miners on the Ethereum network who crunch the numbers and confirm the transaction (thank you, miners!). For that service the miners receive a network fee paid by the person submitting the transaction request (please note that entire fee goes to the miners, not us!). That fee, sometimes written as “Tx fee,” is determined by two factors: the “Gas Price” of your transaction and the amount of gas used to process it.</p>
        <div class="sc-pVTFL jJdkGn">
            <div>
                <img src={cattutor} alt="Kitty Class"/>
            </div>
            <p>Gas Price (Gwei) is the amount of ether offered per gas unit to pay miners to process your transaction. Converting Gwei into ether is simple: take the Gwei value and move the decimal point nine spaces to the left. So, 5 Gwei equals 0.000000005 ether.</p>
        </div>
        <img src={CK_GitbookGraphics_Gas1} alt="Gas example" style={{maxWidth: "355px"}}/>
        <p>“Gas Limit” sets the maximum amount of computational power you’ll allow the miner to use before they top out and stop processing your request. Essentially gas limit creates a ceiling on how much ether you want to spend on a given transaction as a way to keep costs reasonable. A wallet, like MetaMask, always finds the optimal Gas Limit and there’s no reason to change it.</p>
        <p>To calculate the maximum possible fee for a given transaction, multiply the gas price by the gas limit. So, as per our examples above, the maximum possible transaction fee in this instance would be:</p>
        <p>250,000 x 5 Gwei = 250,000 x 0.000000005 = 0.00125 ETH</p>
        <h3>What gas price should I use?</h3>
        <p>Modern wallets predict optimal gas price quite well and in most cases there’s no reason to change the suggested gas price. That said, setting a gas price is up to you – some people are more gassy than others – but there are helpful guidelines. The higher the gas price you set, the faster your transaction will get processed. So for more important transactions, think about setting a higher gas price. If, for example, you’re bidding on your dream Kitty and worry about another player swooping in and snatching it away, set the gas price higher to speed up your request and thwart cat burglars. If you’re just going to breed a couple of your Kitties, it’s fine to set it lower and save some money, but the transaction may take longer.</p>
        <p><a href="https://etherscan.io/gastracker" target="_blank">Etherscan Gas Tracker</a> is a valuable tool to help manually set your gas price. Use their suggested “High” price to make sure a transaction goes through quickly (usually, a few minutes). Select the "Low" price for less important transactions that you’re willing to wait on. Please note that network conditions and gas price can change quickly.</p>
        <img src={CK_GitbookGraphics_Gas2} alt="Gas example"/>
        <p>Keep in mind that your actual transaction fee will almost always be lower than the potential maximum – great! Once a miner executes your transaction, you keep whatever ether is left over from your gas limit. But if your gas limit is too low and the miner maxes out, your transaction will get cancelled and you’ll still have to pay the max fee – not so great. So make sure to choose a gas limit with enough room to guarantee your transaction goes through. Remember, MetaMask will always suggest the exact amount of gas to use so there’s no need to adjust.</p>

    </div>
    </>
  )
}
