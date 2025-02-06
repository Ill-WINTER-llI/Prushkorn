// @ts-check
import { expect } from '@playwright/test';
import { test } from './pages/base';
import { EnterpirseUser } from './test-data/user';

test.beforeEach(async ({ loginpage }) => {
  await loginpage.goto();

});

test('input field should display as the data that was filled', async ({ loginpage }) => {
  await loginpage.fillUserPassword('Automatetesting@osn.com', 'P9Tot2hpHE@');
  expect(await loginpage.getUsername()).toBe('Automatetesting@osn.com');
  expect(await loginpage.getPassword()).toBe('P9Tot2hpHE@');
});

test('Should show an error message if login without password', async ({ loginpage }) => {

  await loginpage.fillUserPassword('Automatetesting@osn.com', '');
  await loginpage.clickLogin();
 
  expect(await loginpage.getErrorMessage()).toContain('Please fill in Password');
  expect(loginpage.isValidUrl()).toBe(true);
  
});

test('Should show an error message if login without username', async ({ loginpage }) => {

  await loginpage.fillUserPassword('', 'P9Tot2hpHE@');
  await loginpage.clickLogin();

  expect(await loginpage.getErrorMessage()).toContain('Please fill in Email or Username');
  expect(loginpage.isValidUrl()).toBe(true);
  
});


test('Should login success without error', async ({ loginpage }) => {
  await loginpage.fillUserPassword('Automatetesting@osn.com', 'P9Tot2hpHE@');
  expect(await loginpage.getUsername()).toBe('Automatetesting@osn.com');
  expect(await loginpage.getPassword()).toBe('P9Tot2hpHE@');
  await loginpage.clickLogin();
  expect(loginpage.isValidUrl()).toBe(true);
});

EnterpirseUser.forEach(({username, password}) =>{
  test(`Should logged in sccuessfuly with valid credentials1: ${username}`, async ({ loginpage }) => {
    await loginpage.fillUserPassword(username,password);
    await loginpage.clickLogin();
    expect(await loginpage.getErrorMessage()).not.toContain('Please fill in Password');
    expect(loginpage.isValidUrl()).toBe(false);
  
  });
});
