import {test, spec} from '@playwright/test'

test('locator', async ({page}) =>{

    await page.goto('https://www.demoblaze.com/');

    //Login Option

    await page.locator('#login2').click();
///username

    await page.locator('#loginusername').fill('akanksha');

    //password

await page.locator('#loginpassword').fill('akanksha');

//login

await page.locator("button[onclick='logIn()']").click();

})


