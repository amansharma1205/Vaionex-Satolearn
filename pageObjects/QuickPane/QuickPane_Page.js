class Quick_Pane {
            ///##Quick Panel 
            get WalletData(){ return $("//div[@id='kt_quick_panel']/div/div[1]/div[@class='kt-user-card__name']");}
            get SatoshiBalance() { return $("//div[1]/h6[@class='MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary']");}
            get DollarBalance(){ return $("//div[@id='kt_quick_panel']/div/div[2]/div[2]/h6[.='Wallet Balance in $']");}
            get WalletKeys(){  $("//div[@id='kt_quick_panel']/div/div[2]/div[3]/div[@class='kt-user-card__name']");}
            

        } 
