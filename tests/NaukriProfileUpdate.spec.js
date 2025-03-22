import {test, expect} from '@playwright/test'
import POManager from '../pages/POManager.page.js';

test.describe('Naukri Profile Update Automation', () => {

    //const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';

   /* test.use({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
        //storageState : 'Config/Login.json'
    });*/

    test.skip('Update',  async({ page }) =>{

        const poManager = new POManager(page);
        const naukripage = poManager.getNaukriPage();

        await naukripage.launchHomepage();
        await naukripage.ClickOnLoginOption();
        const newTab = await naukripage.GoogleSignOp();

        await newTab.googleEmail("********");
        await newTab.emailNext();
        await newTab.googlepwd("********");
        await newTab.pwdNext();
        await naukripage.ClickOnProfile();
        await naukripage.ClickonEdit();
        await naukripage.SaveProfile();
        await naukripage.CheckUpdateDay();

        await page.close();
    })



    test("Auth Login" , async( {page} ) =>{
        const poManager = new POManager(page);
        const naukripage = poManager.getNaukriPage();
        //const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';
        //naukripage.setUserAgent(ua);

       

        await naukripage.launchHomepage();
        await naukripage.ClickOnLoginOption();
       await naukripage.EnterEmail('******');
       await naukripage.Enterpwd('**********');
       await naukripage.ClickOnLogin();
        await naukripage.ClickOnProfile();
        await naukripage.ClickonEdit();
        await naukripage.SaveProfile();
        await naukripage.CheckUpdateDay();

        await page.close();
    })

})

