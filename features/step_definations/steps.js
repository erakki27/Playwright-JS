const assert = require('assert')
const { When, Then, Given } = require('@cucumber/cucumber')
const path = require("path")
let poManager 
const playwright = require('@playwright/test');
const {test, expect} = require('@playwright/test');
const {POManager} = require('../../pages/POManager.page');

Given('Open Amazon Homepage', {timeout : 100 *1000}, async function () {
    // Write code here that turns the phrase above into concrete actions
    this.poManager = new POManager(this.page);
     this.HomePage = this.poManager.getHomePage();
    await this.HomePage.launchHomepage();
})

  When('page opens, it should have nagivation bar', async function() {

    await this.HomePage.navgationbarheader();
   
  });

  Then('verify page titile', async function () {
    await expect(this.page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
  });

  When('search the product', async function () {
    await this.HomePage.searchProduct('Watches');
  await this.HomePage.clickOnSearch();
  });

  Then('verify search page titile', async function () {
    await expect(this.page).toHaveTitle('Amazon.in : Watches');
  });

  When('click on add to card product', async function () {
    const productpage = this.poManager.getProductPage();
    const newTab = await productpage.clickOnProducAndAddToCart();
    await newTab.clickOnAddToCartNewTab();
    this.page.reload();

  });

  Then('check product added to orders page', async function () {
    await this.HomePage.clickOnViewOrder();
  });

