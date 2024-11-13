const {test,expect} = require('@playwright/test');
const {HomePage} = require('../pageObjects/HomePage');
const {LoginPage} = require('../pageObjects/LoginPage');


test('Successful Login to KG site', async ({page, baseURL})=>{
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const homePage = new HomePage(page, baseURL);
    const loginPage = new LoginPage(page);
    
    //Visit kosher Graphics Site
    await homePage.visitUrl();
    await homePage.verifyPageLoadedSuccessfully();

    //Click Login Button
    await homePage.clickHomeLoginButton();

    //Fill in Credentials and Login
    await loginPage.validLogin(email, password);

    //Verify Successsful Login
    await homePage.verifySuccesfulLogin();
});

// test('Invalid Login to KG site', async ({page})=>{
//     const email = "mayokuntestwrong@gmail.com";
//     const password = "kgtest12345";
//     const homePage = new HomePage(page);
//     const loginPage = new LoginPage(page);
    
//     //Visit kosher Graphics Site
//     await homePage.visitUrl();
//     await homePage.verifyPageLoadedSuccessfully();

//     //Click Login Button
//     await homePage.clickHomeLoginButton();

//     //Fill in Credentials and Login
//     await loginPage.validLogin(email, password);

//     //Verify unSuccesssful Login
// });