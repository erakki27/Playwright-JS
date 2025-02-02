const {test, expect} = require('@playwright/test');
exports.NaukariPage = class NaukariPage {

    constructor(page){
        this.page = page;


    }

    async launchHomepage(){
        await this.page.goto('https://www.naukri.com');
    }

    async ClickOnLoginOption(){
        await this.page.locator('#login_Layer').click();
    }

    async EnterEmail(email){
        await this.page.locator('input[placeholder="Enter your active Email ID / Username"]').fill(email);
    }

    async Enterpwd(pwd){
        await this.page.locator('input[placeholder="Enter your password"]').fill(pwd);
    }

    async ClickOnLogin(){
        await this.page.locator('button[type="submit"]').click();
    }

    async ClickOnProfile(){
        await this.page.locator('div[class="view-profile-wrapper"] a').click();
    }

    async ClickonEdit(){
        await this.page.locator('em[class="icon edit "]').click();
    }

    async SaveProfile(){
        await this.page.locator('#saveBasicDetailsBtn').click();
    }

    async CheckUpdateDay(){
        await expect(this.page.locator('.mod-date')).toContainText('Today');
    }
}