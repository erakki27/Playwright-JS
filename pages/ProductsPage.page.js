exports.ProductPage = class ProductPage{

    constructor(page){
        this.page = page;
    }

    async clickAddTocart(){
        await this.page.locator('#a-autoid-1').click();
    }

    async clickOnProducAndAddToCart(){
        
        const [pagePromise] = await Promise.all([this.page.waitForEvent('popup'),
        await this.page.locator('[data-cy="title-recipe"]').first().click()
        ]);
        await pagePromise.waitForLoadState();
       // await pagePromise.locator('#add-to-cart-button').click();
       return new ProductPage(pagePromise);

    }

    async clickOnAddToCartNewTab(){
        await this.page.locator('#add-to-cart-button').click();
        
    }

}