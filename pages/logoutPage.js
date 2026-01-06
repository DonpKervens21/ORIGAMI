import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class LogoutPage extends BasePage{

    constructor(page){
        super(page);

        this.logout_button = page.getByRole('link', { name: 'Logout' });
        this.succesful_logout_message = page.getByText('You logged out of the secure area!');
    }

    /* Log out the user by clicking the logout button and verifies the successful logout message is visible. */
    async logout(){

        await this.clickElementAndHighlight(this.logout_button);
        await expect(this.succesful_logout_message).toBeVisible({timeout: 10});
    }
}
