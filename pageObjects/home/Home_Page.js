class home_page{
    
    
    get sato() { return $("//a/span/h1[1]");}
    get learn() { return $("//a/span/h1[2]");}
    get homeLink() { return $("//span[@class='kt-menu__link-text' and text()='Home']");}
    get flagIcon() { return $("//div[@class='kt-header__topbar-icon']/img");}
    get flagEnglish() { return $("//span[@class='kt-nav__link-text' and text()='English']");}
    get flagMandarin() { return $("//span[@class='kt-nav__link-text' and text()='Mandarin']");}
    get flagSpanish() { return $("//span[@class='kt-nav__link-text' and text()='Spanish']");}
    get loginLink() { return $("//span[@class='MuiButton-label' and text()='Login']");}
    get registerLink() { return $("//span[@class='MuiButton-label' and text()='Register']");}
    get overViewLink() { return $("//span[@class='kt-menu__link-text' and text()='Overview']");}

}

export default new home_page()