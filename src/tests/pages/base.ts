import { test as base } from "@playwright/test"
import { LoginPage } from "./login.page"

type baseFixture = {
 loginpage : LoginPage,

}

export const test = base.extend<baseFixture>({
    loginpage: async ({ page }, use)=>{
        await use(new LoginPage(page));
    },
})
