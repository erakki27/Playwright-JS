import {test, expect} from '@playwright/test'
import POManager from '../pages/POManager.page.js';

test.describe('Linkedin Profile Update Automation', () => {
    test.skip('Update',  async({ page }) =>{

        const poManager = new POManager(page);
        const linkedinPage = poManager.getLinkedinPage();

        await linkedinPage.launchHomepage();
        await linkedinPage.ClickOnSigninoption();
        await linkedinPage.EnterEmail('erakki27@gmail.com');
        await linkedinPage.EnterPwd('Shutup@27a');
        await linkedinPage.ClickOnSignin();
        await linkedinPage.ClickOnProfile();
        await linkedinPage.ClickOnedit();
        await linkedinPage.SaveProfile();
        await linkedinPage.Success();
        await page.close();

    })

    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';

    test.use({
        userAgent: 'ua',
        storageState : 'Config/Linkedin.json'
    });

    test('Update with Auth',  async({ page }) =>{

        const poManager = new POManager(page);
        const linkedinPage = poManager.getLinkedinPage();

        await linkedinPage.launchHomepage();
        await linkedinPage.ClickOnSigninoption();
        //await linkedinPage.EnterEmail('**********');
       // await linkedinPage.EnterPwd('S*********');
       // await linkedinPage.ClickOnSignin();
        await linkedinPage.ClickOnProfile();
        await linkedinPage.ClickOnedit();
        await linkedinPage.SaveProfile();
        await linkedinPage.Success();
        await page.close();

    })
})