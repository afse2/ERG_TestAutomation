import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class FilterUtility {

    static async checkSelectedFilterOnTable(page: Page, selectedFilterLocator: Locator, tableItemsLocator: Locator) {
        // Get the selected facility name
        const selectedFilter = await selectedFilterLocator.textContent();

        let hasNextPage = true;

        // Loop through all pages
        while (hasNextPage) {
            const reportCount = await tableItemsLocator.count();

            // Loop through all facilities on the current page and check if they match the selected facility
            for (let i = 0; i < reportCount; i++) {
                const tableItem = await tableItemsLocator.nth(i).innerText();

                // Assert that facility names match
                if (tableItem.trim() !== "") {

                    expect(tableItem).toEqual(selectedFilter);
                }
            }

            // Check if there is a next page button and it is not disabled
            hasNextPage = await page.locator("div.n-pagination-item--button").nth(1).isVisible() &&
                !((await page.locator("div.n-pagination-item--button").nth(1).getAttribute("class")).includes("disabled"));

            // If there is a next page, click it to go to the next page
            if (hasNextPage) {
                await page.locator("div.n-pagination-item--button").nth(1).click();
            }
        }
    }

    static async selectOptionFromFilter(page: Page, option: string) {
        const dropdownOptions = page.locator(".v-vl-visible-items span");
        const dropdownCount = await dropdownOptions.count();

        for (let i = 1; i < dropdownCount; i++) {
            const optionText = await dropdownOptions.nth(i).innerText();

            if (optionText === option) {
                await dropdownOptions.nth(i).click();
                return;
            }
        }

    }



    static async searchUser(page: Page, mailsSelector: Locator, searchText: string) {
        let hasNextPage = true;

        // Loop through pages
        while (hasNextPage) {
            await page.waitForTimeout(500);  // Wait for the page to load

            // Get the count of mails (or users) on the current page
            let mailsCount = await mailsSelector.count();

            // Check all users on the current page
            for (let j = 0; j < mailsCount; j++) {
                const mailText = await mailsSelector.nth(j).innerText();

                // If any mail text does not include the search text, mark as failure
                if (!mailText.includes(searchText)) {
                    return false;
                }
            }

            // Check if there is a next page button and it is not disabled
            hasNextPage = await page.locator("div.n-pagination-item--button").nth(1).isVisible() &&
                !((await page.locator("div.n-pagination-item--button").nth(1).getAttribute("class")).includes("disabled"));

            // If there is a next page, click it to go to the next page
            if (hasNextPage) {
                await page.locator("div.n-pagination-item--button").nth(1).click();
            }
        }

        // Return true if all users in all pages include the search text
        return true;
    }

    static async searchFilter(page: Page, searchText: string) {

        // Get the count of mails (or users) on the current page
        let optionsCount = await page.locator(".v-vl-visible-items span").count();

        // Check all users on the current page
        for (let j = 0; j < optionsCount; j++) {
            const filterText = await page.locator(".v-vl-visible-items span").nth(j).innerText();

            // If any mail text does not include the search text, mark as failure
            if (!filterText.includes(searchText)) {
                return false;
            }
        }
        // Return true if all users in all pages include the search text
        return true;
    }
}