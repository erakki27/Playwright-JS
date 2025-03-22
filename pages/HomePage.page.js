import {test, expect} from '@playwright/test'
 class HomePage {

    constructor(page){
        this.page = page;


    }

    async launchHomepage(){
        await this.page.goto('https://www.amazon.in/');
    }

    async searchProduct(product){
        await this.page.locator('#twotabsearchtextbox').fill(product);
    }

    async clickOnSearch(){
        await this.page.locator('#nav-search-submit-button').click();
    }

    async clickOnViewOrder(){
        await this.page.locator('#nav-orders').click();
    }

    async navgationbarheader(){
        await expect(this.page.locator('#nav-belt')).toBeVisible();
    }

}
export default HomePage;