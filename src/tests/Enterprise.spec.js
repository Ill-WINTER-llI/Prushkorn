import { expect } from '@playwright/test';
import { test } from './pages/base';
import { EnterpirseUser } from './test-data/user';
test.describe('Login function',() => {

test.beforeEach(async ({ loginpage }) => {
    await loginpage.goto();

  });

  EnterpirseUser.forEach(({username, password}) =>{
    test(`User should be goto analytic page successfully: ${username}`, async ({ loginpage }) => {
      await loginpage.fillUserPassword(username,password);
      await loginpage.clickLogin();
      //expect(await loginpage.getErrorMessage()).not.toContain('Please fill in Password');
      expect(loginpage.isValidUrl()).toBe(false);
   
    });
  });

});