import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class DashboardPage extends BasePage{

    constructor(page){
        super(page);

        this.succesful_login_message = page.getByText('You logged into a secure area');
    }
    
    /* Verified that the successful login message is visible and highlight it with a red border. */
    async succesfulMessage(){
      await expect(this.succesful_login_message).toBeVisible({timeout: 10});
      await this.highlight(this.succesful_login_message)
    }
}