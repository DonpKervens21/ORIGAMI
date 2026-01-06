import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage {

   constructor(page){
        super(page);

        this.user_input = page.locator("//*[@id= 'username']");
        this.password_input = page.locator("//*[@id= 'password']");
        this.login_button = page.locator("//*[@type= 'submit']");
        this.verify_login_page = page.locator("//*[contains(text(),'Login Page')]")
        this.invalid_user_message = page.locator("//*[contains(text(),'Your username is invalid!')]");
        this.invalid_pass_message = page.locator("//*[contains(text(),'Your password is invalid!')]");
   }

   /*  Opens the specified URL by navigating to it. */
   async openUrl(url){
       await this.navigateTo(url);
   }
   
   /*  Performs a login entering the username and password and clicking the login button.
   * Also Highlights the input fields and the login button. */
   async login(username, password){

       await this.writeTextAndHighlight(this.user_input,username);
       await this.writeTextAndHighlight(this.password_input,password);
       await this.clickElementAndHighlight(this.login_button);
   }     

   /*  * Validates the login credentials for visible error messages.
   * Highlights the login verification page if there is an error.
   * Logs a message to the console depending on the validation result*/
   async validateCredencial() {
      const errors = {
         user: this.invalid_user_message,
         pass: this.invalid_pass_message
      };
      
      if (await errors.user.isVisible()) {
         await expect(this.verify_login_page).toBeVisible();
         await this.highlight(this.verify_login_page)
         console.log("Error: Invalid username");
      } 
      else if (await errors.pass.isVisible()) {
         await expect(this.verify_login_page).toBeVisible();
         await this.highlight(this.verify_login_page)
         console.log("Error: Invalid password");
      } 
      else {
         console.log("Successful Login");
      }
   }
}