import QuickPanel_Page from "../../pageObjects/QuickPane/QuickPane_Page";
import Login_Page from "../../pageObjects/login/Login_Page";
var assert = require('assert');

describe('Quick Panle Test cases ',async()=>{
    
    beforeEach (function (){
        browser.url('/')
        Login_Page.waitforPageload();
       
        
    })
    it('Test 1:- Verify Quick Panle Screen',async()=>{
      
      Login_Page.LoginToSato();
      await browser.pause(5000);
      await Login_Page.clickSubmitButton();
      await browser.pause(2000);
      await Login_Page.quickPanel.click();
    try {
        await QuickPanel_Page.WalletData.waitForExist();
        await expect(await QuickPanel_Page.WalletData).toHaveText("Wallet Data");
        await QuickPanel_Page.SatoshiBalance.waitForExist();
        await expect(await QuickPanel_Page.SatoshiBalance).toHaveText("Wallet Balance in Satoshi");
        await QuickPanel_Page.DollarBalance.waitForExist();
        await expect(await QuickPanel_Page.DollarBalance).toHaveText("Wallet Balance in $");
        await QuickPanel_Page.PrivateKey.waitForExist();
        await expect(await QuickPanel_Page.PrivateKey).toHaveText("Private Key");
        await QuickPanel_Page.PublicKey.waitForExist();
        await expect(await QuickPanel_Page.PublicKey).toHaveText("Public Key");
        await QuickPanel_Page.Address.waitForExist();
        await expect(await QuickPanel_Page.Address).toHaveText("Address");
        await QuickPanel_Page.UTXOSets.waitForExist();
        await expect(await QuickPanel_Page.UTXOSets).toHaveText("UTXO Sets");
        await QuickPanel_Page.UTXOTabelHeader.waitForExist();
        await expect(await QuickPanel_Page.UTXOTabelHeader).toHaveText("value vout txid scriptPubKey");
        await QuickPanel_Page.Explore.waitForExist();
        await expect(await QuickPanel_Page.Explore).toHaveText("Explorer");
        await QuickPanel_Page.WhatonChain.waitForExist();
        await expect(await QuickPanel_Page.WhatonChain).toHaveText("WHATSONCHAIN");
       
      } 
      catch (error) {
       console.log("Error:-"+error);
       assert.fail();
      }
      
       
    })

})