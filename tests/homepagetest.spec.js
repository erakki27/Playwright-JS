const { test, expect } = require('@playwright/test');
import POManager from '../pages/POManager.page.js';

test.describe('Automation', () => { 
test('Homepage Test', async ({ page }) => {
  const poManager = new POManager(page);
  const HomePage = poManager.getHomePage();
  const productpage = poManager.getProductPage();
    await HomePage.launchHomepage();
    await HomePage.navgationbarheader();
    

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
  await HomePage.searchProduct('Watches for men');
  await HomePage.clickOnSearch();

  // Check title
  await expect(page).toHaveTitle('Amazon.in : Watches for men');
  const newTab = await productpage.clickOnProducAndAddToCart();
  await newTab.clickOnAddToCartNewTab();
  await HomePage.searchProduct('iphone');
  await HomePage.clickOnSearch();

});
});
