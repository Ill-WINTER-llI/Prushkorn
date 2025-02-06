import { removeSlahUrl } from "../utils";

export class LoginPage {
    baseUrl = 'https://mandala-analytics.com/auth/';
    
    locatorUsername = '#user_name';
    locatorPassword = '#password';
    locatorButtonLogin = '#btlogin';
    locatorErrorpopup = 'body > div.sweet-alert.showSweetAlert.visible';
    /** 
     * 
     * @param {import("@playwright/test").Page} page
     *  
     */
   
    constructor(page){
        this.page = page;
    }
    async goto(){
        await this.page.goto(this.baseUrl);
    }

    async fillUserPassword(username, password){
        await this.page.locator(this.locatorUsername).fill(username);
        await this.page.locator(this.locatorPassword).fill(password);
    }

    async clickLogin(){
        await this.page.click(this.locatorButtonLogin);
    }

    async getUsername(){
       return await this.page.locator(this.locatorUsername).inputValue();
    }
    async getPassword(){
        return await this.page.locator(this.locatorPassword).inputValue();
    }

    async getErrorMessage(){
        try{
            return await this.page.locator(this.locatorErrorpopup).textContent({timeout: 1000});
        }catch(e){
            
        }
        return "";
    }

    isValidUrl(){
            const url = removeSlahUrl(this.page.url());
            // console.log(url, this.baseUrl, this.page.url());
            // console.log(url === this.baseUrl);
            return url === this.baseUrl;
    }

}