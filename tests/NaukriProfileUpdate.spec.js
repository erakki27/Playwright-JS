const { test, expect } = require('@playwright/test');
import {POManager} from '../pages/POManager.page';

test.describe('Naukri Profile Update Automation', () => {
    test.skip('Update',  async({ page }) =>{

        const poManager = new POManager(page);
        const naukripage = poManager.getNaukriPage();

        await naukripage.launchHomepage();
        await naukripage.ClickOnLoginOption();
        await naukripage.EnterEmail('erakki27@gmail.com');
        await naukripage.Enterpwd('Star@27a');
        await naukripage.ClickOnLogin();
        await naukripage.ClickOnProfile();
        await naukripage.ClickonEdit();
        await naukripage.SaveProfile();
        await naukripage.CheckUpdateDay();

        await page.close();
    })

    test.use({
        storageState : 'Config/Login.json'
    });


    test("Auth Login" , async( {page} ) =>{

        const poManager = new POManager(page);
        const naukripage = poManager.getNaukriPage();

        await naukripage.launchHomepage();
        //await naukripage.ClickOnLoginOption();
       // await naukripage.EnterEmail('erakki27@gmail.com');
       // await naukripage.Enterpwd('Star@27a');
       // await naukripage.ClickOnLogin();
        await naukripage.ClickOnProfile();
        await naukripage.ClickonEdit();
        await naukripage.SaveProfile();
        await naukripage.CheckUpdateDay();

        await page.close();
    })

})

