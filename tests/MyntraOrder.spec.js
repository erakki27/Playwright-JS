const { test, expect } = require('@playwright/test');
import POManager from '../pages/POManager.page.js';

test.describe('Myntra Automation' , () =>{
    test('Add to Bag Test' ,async ({ page }) => {
        const poManager = new POManager(page);
        const MyntraHomePage = poManager.getMyntraHomePage();
        await MyntraHomePage.LaunchMyntra();
        await MyntraHomePage.selectWomenSce();
        await MyntraHomePage.selectProductType();
        await MyntraHomePage.selectColor();
        await MyntraHomePage.selectProduct();
    })

    test('Product detals', async ({ page }) =>{
        const poManager = new POManager(page);
        const MyntraHomePage = poManager.getMyntraHomePage();
        await MyntraHomePage.LaunchMyntra();
        await MyntraHomePage.selectWomenSce();
        await MyntraHomePage.selectProductType();
        await MyntraHomePage.allProductBrand();
        


    })
})