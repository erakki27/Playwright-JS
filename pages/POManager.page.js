const { HomePage } = require("./HomePage.page")
const { ProductPage } = require("./ProductsPage.page")

class POManager{
    constructor(page)
    {
        this.page = page;
        this.HomePage = new HomePage(this.page);
        this.ProductPage = new ProductPage(this.page);
    }

    getHomePage(){
        return this.HomePage;
    }

    getProductPage(){
        return this.ProductPage;
    }
}

module.exports = {POManager};