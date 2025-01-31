const {test, expect} = require('@playwright/test');
exports.LinkedinPage = class LinkedinPage {

    constructor(page){
        this.page = page;


    }

    async launchHomepage(){
        await this.page.goto('https://www.linkedin.com/');
    }

    async ClickOnSigninoption(){
        await this.page.locator('.nav__button-secondary.btn-secondary-emphasis.btn-md').click();
    }

    async EnterEmail(Username){
        await this.page.locator('#username').fill(Username);
    }

    async EnterPwd(pwd){
        await this.page.locator('#password').fill(pwd);
    }

    async ClickOnSignin(){
        await this.page.locator('button[aria-label="Sign in"]').click();
    }

    async ClickOnProfile(){
        await this.page.locator('.t-16.t-black.t-bold').click();
    }

    async ClickOnedit(){
        await this.page.locator('button[aria-label="Edit intro"]').click();
    }

    async SaveProfile(){
        await this.page.locator('[data-view-name="profile-form-save"]').click();
    }

    async Success(){
        await expect(this.page.locator('p[class="artdeco-toast-item__message"] span')).toContainText('Save was successful.');
    }
}