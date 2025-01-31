const { test, expect } = require('@playwright/test');
import {POManager} from '../pages/POManager.page';

test.describe('Linkedin Profile Update Automation', () => {
    test('Update',  async({ page }) =>{

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
})