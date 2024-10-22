import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class FilterUtility{

    static async checkSelectedBrandFilter(page:Page, selectedBrandLocator: Locator, brandNameLocator: Locator) {
        // Get the selected facility name
        const selectedBrand = await selectedBrandLocator.textContent();

        let hasNextPage = true;

        // Loop through all pages
        while (hasNextPage) {
            const reportCount = await brandNameLocator.count();

            // Loop through all facilities on the current page and check if they match the selected facility
            for (let i = 0; i < reportCount; i++) {
                const brandName = await brandNameLocator.nth(i).innerText();
                
                // Assert that facility names match
                if (brandName.trim() !== "") {

                    expect(brandName).toEqual(selectedBrand); 
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


    static async checkSelectedFacilityFilter(page:Page, selectedFacilitySelector: Locator, facilitiesNameSelector: Locator) {
        // Get the selected facility name
        const selectedFacility = await selectedFacilitySelector.textContent();

        let hasNextPage = true;

        // Loop through all pages
        while (hasNextPage) {
            const reportCount = await facilitiesNameSelector.count();

            // Loop through all facilities on the current page and check if they match the selected facility
            for (let i = 0; i < reportCount; i++) {
                const facilityName = await facilitiesNameSelector.nth(i).innerText();
                expect(facilityName).toEqual(selectedFacility); // Assert that facility names match
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

    static async checkSelectedDeviceTypeFilter(page:Page, selectedDeviceTypeLocator: Locator, deviceTypeSelector: Locator) {
        // Get the selected facility name
        const selectedDeviceType = await selectedDeviceTypeLocator.textContent();

        let hasNextPage = true;

        // Loop through all pages
        while (hasNextPage) {
            const reportCount = await deviceTypeSelector.count();

            // Loop through all facilities on the current page and check if they match the selected facility
            for (let i = 0; i < reportCount; i++) {
                const deviceType = await deviceTypeSelector.nth(i).innerText();
                expect(deviceType).toEqual(selectedDeviceType); // Assert that facility names match
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

    static async selectOptionFromFilter(optionsLocator: Locator, option: string) {
        const dropdownOptions = optionsLocator;
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

    static async searchFilter(filterOptions: Locator, searchText: string) {
        
            // Get the count of mails (or users) on the current page
            let optionsCount = await filterOptions.count();

            // Check all users on the current page
            for (let j = 0; j < optionsCount; j++) {
                const filterText = await filterOptions.nth(j).innerText();

                // If any mail text does not include the search text, mark as failure
                if (!filterText.includes(searchText)) {
                    return false;
                }
            }
        // Return true if all users in all pages include the search text
        return true;
    }
}