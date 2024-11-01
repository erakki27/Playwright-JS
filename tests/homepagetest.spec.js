const { test, expect } = require('@playwright/test');
import { HomePage } from '../pages/HomePage.page';
import { ProductPage } from '../pages/ProductsPage.page';

test.describe('Automation', () => { 
test('Homepage Test', async ({ page }) => {
    const homepage = new HomePage(page);
    const productpage =  new ProductPage(page);
    await homepage.launchHomepage();
    

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
  await homepage.searchProduct('Watches');
  await homepage.clickOnSearch();

  // Check title
  await expect(page).toHaveTitle('Amazon.in : Watches');
  const newTab = await productpage.clickOnProducAndAddToCart();
  await newTab.clickOnAddToCartNewTab();

 


});
});
