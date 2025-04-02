import {test, expect} from '@playwright/test'

class MyntraHomePage{
    constructor(page){
        this.page = page;
    }

    async LaunchMyntra(){
        await this.page.goto('https://www.myntra.com/');
    }

    async selectWomenSce(){
        await this.page.locator('//a[contains(text(),"Women")]').hover();
    }

    async selectProductType(){
        await this.page.getByRole('link', { name: 'Dresses', exact: true }).click();
    }

    async selectColor(){
        await this.page.locator('span[data-colorhex="black"]').click();
    }
    async selectProduct(){
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: 'SASSAFRAS BASICS Self Design' }).click();
        const page1 = await page1Promise;
        await page1.locator('//p[@class="size-buttons-unified-size" and contains(text(),"M")]').click();
        await page1.getByText('ADD TO BAG').click();

    }

    async allProductBrand(){
        const product = await this.page.locator('h3');
        console.log(await product.count());
        for (let i = 0; i < await product.count(); i++) {
           console.log(await product.nth(i).textContent());
          }
       
        
        
    }
}

export default MyntraHomePage;