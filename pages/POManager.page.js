import HomePage from "./HomePage.page.js"
import ProductPage from "./ProductsPage.page.js"
import NaukariPage from "./NaukariPage.page.js"
import LinkedinPage from"./LinkedinPage.page.js"

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

export default POManager;