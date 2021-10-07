var assert = require('assert');
class Quick_Pane {
            ///##Quick Panel 
            get WalletData(){ return $("//div[@id='kt_quick_panel']/div/div[1]/div[@class='kt-user-card__name']");}
            get SatoshiBalance(){ return $("//div[1]/h6[@class='MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary']");}
            get DollarBalance(){ return $("//div[@id='kt_quick_panel']/div/div[2]/div[2]/h6[.='Wallet Balance in $']");}
            get WalletKeys(){ return $("//div[@id='kt_quick_panel']/div/div[2]/div[3]/div[@class='kt-user-card__name']");}
            get PrivateKey(){ return $("//div[@id='kt_quick_panel']/div/div[2]/div[4]/h6[1]");}
            get PublicKey(){ return $("//div[@id='kt_quick_panel']/div/div[2]/div[5]/h6[1]");}
            get Address(){ return $("//div[@id='kt_quick_panel']/div/div[2]/div[6]/h6[1]/span[.='Address ']");}
            get UTXOSets(){return $("//div[@id='kt_quick_panel']/div/div[2]/div[7]/div[@class='kt-user-card__name']");}
            get UTXOTabelHeader(){return $("//div[@id='kt_quick_panel']//table");}
            get Explore(){return $("//div[@id='kt_quick_panel']/div/div[2]/div[8]/div[@class='kt-user-card__name']");}
            get WhatonChain(){return $("//a [@class='MuiButtonBase-root MuiButton-root MuiButton-text']");}
          
            Gethread(locator){
                var link=locator.getAttribute('href')
                console.log("Linksssss"+link);
                return link;

            }

        } export default new Quick_Pane()
