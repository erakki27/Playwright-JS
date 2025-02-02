import { Page, Browser, chromium, expect , test} from '@playwright/test';
import path from 'path';
import {POManager} from '../pages/POManager.page';
const authFile = "Config/Login.json";
 test('Auth' , async({page})=>{

    await page.goto('https://www.naukri.com/');
    await page.locator('#login_Layer').click();
    await page.locator('input[placeholder="Enter your active Email ID / Username"]').fill('erakki27@gmail.com');
    await page.locator('input[placeholder="Enter your password"]').fill('Star@27a');
    await page.locator('button[type="submit"]').click();

    await page.waitForLoadState("networkidle");
    await page.context().storageState({ path: authFile });
    console.log("Storage Saved");

        //await page.close();
 })

