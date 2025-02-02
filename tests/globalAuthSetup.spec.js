import { page, Browser, chromium, expect , test} from '@playwright/test';
import path from 'path';
import {POManager} from '../pages/POManager.page';
const authFile = "Config/Login.json";
const authFileLinkedin = "Config/Linkedin.json";

 test.skip('Auth' , async({page})=>{

    await page.goto('https://www.naukri.com/');
    await page.locator('#login_Layer').click();
    await page.locator('input[placeholder="Enter your active Email ID / Username"]').fill('erakki27@gmail.com');
    await page.locator('input[placeholder="Enter your password"]').fill('Star@27a');
    await page.locator('button[type="submit"]').click();

    await page.waitForLoadState("networkidle");
    await page.context().storageState({ path: authFile });
    console.log("Storage Saved");

        //await page.close();
 });

 test('Linkedin Auth', async({page})=>{
    const poManager = new POManager(page);
        const linkedinPage = poManager.getLinkedinPage();

        await linkedinPage.launchHomepage();
        await linkedinPage.ClickOnSigninoption();
        await linkedinPage.EnterEmail('erakki27@gmail.com');
        await linkedinPage.EnterPwd('Shutup@27a');
        await linkedinPage.ClickOnSignin();

        //await page.waitForLoadState("networkidle");
    await page.context().storageState({ path: authFileLinkedin });
    console.log("Storage Saved");
 })

