import { expect } from "@playwright/test";

export class BasePage {
      
    constructor(page){
        this.page = page;
    }

    /* Navigates the browser to the specified URL. */
    async navigateTo(url){
        await this.page.goto(url);
    }

    /* Clicks on the specified web element. */
    async clickToElement(element) {
        await element.click();
    }

    /* Highlights the element with a red border and fills it with the given text. */
    async writeTextAndHighlight(element, text) {
        await element.evaluate(el => el.style.border = '2px solid red');
        return await element.fill(text);
    }

    /* Highlights the element with a red border, waits for it to be visible, and clicks on it. */
    async clickElementAndHighlight(element, timeOut = 120000){
        await expect(element).toBeVisible({timeout:timeOut})
        await element.evaluate(el => el.style.border = '2px solid red')
        await element.click({timeout: timeOut})    
    }

    /* Adds a red border to the specified element to highlight it visually. */
    async highlight(element){
        await element.evaluate(el => el.style.border = '2px solid red')
    }

}