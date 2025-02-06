
export class EnterpiresClass {
    baseUrl = 'https://www.mandala-analytics.com/auth/';
    analyticUrl = 'https://www.mandala-analytics.com/project/#myproject';
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

    async Gotoanalytic(){
        await this.page.goto(this.analyticUrl);

    }

    async 
    
}