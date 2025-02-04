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

    async GoogleSignOp(){
        const [pagePromise] = await Promise.all([this.page.waitForEvent('popup'),
        await this.page.locator('div[class="google"] span').click()
        ])
        await pagePromise.waitForLoadState();
        return new NaukariPage(pagePromise);
    }

    async googleEmail(email){
        await this.page.locator('#identifierId').fill(email);
    }

    async emailNext(){
        await this.page.locator('#identifierNext').click();
    }

    async googlepwd(pwd){
        await this.page.locator('input[type="password"]').fill(pwd);
    }

    async pwdNext(){
        await this.page('#passwordNext').click();
    }
}