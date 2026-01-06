import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashBoardPage';
import { LogoutPage } from '../pages/logoutPage';
import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config()

test.describe('SDET Take-Home Assessment',() =>{
   
   test('TC-1 Successful login', async ({page})=>{
       const loginPage = new LoginPage(page);
       const dashboardPage = new DashboardPage(page);
       const logoutPage = new LogoutPage(page);

       await loginPage.openUrl(process.env.BASE_URL);
       await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
       await loginPage.validateCredencial();
       await dashboardPage.succesfulMessage();
       await logoutPage.logout();
   })

    test('TC-2 Login with invalid username', async ({page})=>{
       const loginPage = new LoginPage(page);

       await loginPage.openUrl(process.env.BASE_URL);
       await loginPage.login(process.env.INVALID_USER, process.env.PASSWORD);
       await loginPage.validateCredencial();
   })

    test('TC-3 Login with invalid password', async ({page})=>{
       const loginPage = new LoginPage(page);

       await loginPage.openUrl(process.env.BASE_URL);
       await loginPage.login(process.env.USER_NAME, process.env.INVALID_PASS);
       await loginPage.validateCredencial();
   })
})