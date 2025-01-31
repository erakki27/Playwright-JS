const { HomePage } = require("./HomePage.page")
const { ProductPage } = require("./ProductsPage.page")
const { NaukariPage } = require("./NaukariPage.page")
const {LinkedinPage} = require("./LinkedinPage.page")

class POManager{
    constructor(page)
    {
        this.page = page;
        this.HomePage = new HomePage(this.page);
        this.ProductPage = new ProductPage(this.page);
        this.NaukariPage = new NaukariPage(this.page)
        this.LinkedinPage = new LinkedinPage(this.page);
    }

    getHomePage(){
        return this.HomePage;
    }

    getProductPage(){
        return this.ProductPage;
    }

    getNaukriPage(){
        return this.NaukariPage;
    }

    getLinkedinPage(){
        return this.LinkedinPage;
    }
}

module.exports = {POManager};