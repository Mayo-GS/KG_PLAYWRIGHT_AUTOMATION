const {expect} = require('@playwright/test');
class HomePage { 

constructor(page, baseURL){
    this.page = page;
    this.baseURL = baseURL
    this.header = page.locator("div.home-slider-block h2")
    this.homeLoginButton = page.locator("button.sm span:nth-child(1)");
    this.profileIcon = page.locator("button.usermenu");

    };

    async visitUrl(){
        await this.page.goto(this.baseURL);
    };
    
    async verifyPageLoadedSuccessfully(){
        await expect(this.page).toHaveTitle("Create Jewish Graphics with 2,500+ Templates | Kosher Graphics");
        await expect(this.header).toBeVisible();
        await expect(this.header).toHaveText("Create Jewish Graphics")
    };

    async clickHomeLoginButton(){
        await expect(this.homeLoginButton).toBeVisible();
        await this.homeLoginButton.click();
    };

    async verifySuccesfulLogin(){
        await expect(this.profileIcon).toBeVisible();
    }

    async verifyUnsuccesfulLogin(){
        
    }
};
module.exports = {HomePage};