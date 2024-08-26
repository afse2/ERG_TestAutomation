import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";
import { expect } from "playwright/test";





export class ReportPage extends BasePage{
    page: Page;
    reportTab: Locator;
    thisMonth: Locator;
    dailyBasis: Locator;
    paginationItems: Locator;
    dates: Locator;
    basisDropdown: Locator;
    dateDropdown: Locator;
    nextPageButton: Locator;
    monthlyBasis: Locator;
    facilityDropdown: Locator;
    allFacilities: Locator;
    facilitiesOptions
    facilitiesName: Locator;

    constructor(page:Page){
        super(page);
        
        this.reportTab = page.locator("div.item");
        this.thisMonth = page.locator("div.n-dropdown-option-body__label").nth(3);
        this.basisDropdown = page.locator("div.n-base-selection-input");
        this.dailyBasis = page.locator("[data-label= 'Günlük']");
        this.paginationItems = page.locator(".n-pagination-item--clickable");
        this.dates = page.locator("td[data-col-key='timestamp']");
        this.dateDropdown = page.locator("div.select button");
        this.nextPageButton = page.locator("div.n-pagination-item--button").nth(1);
        this.monthlyBasis = page.locator("[data-label='Aylık']");
        this.facilityDropdown = page.locator("input.n-base-selection-input");
        this.allFacilities = page.locator("[data-label='Tümü']").nth(1);
        this.facilitiesName = page.locator("td[data-col-key='facilityName']");
        this.facilitiesOptions = page.locator("div.n-base-select-option__content div div:text-is(' Tesis ') ");



    }


    async checkDatesInCurrentMonth(){
        

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        let hasNextPage = true;


        while(hasNextPage){

            await this.page.waitForTimeout(500);

            let datesCount = await this.dates.count();

            for(let j=0; j < datesCount; j++ ){


                const dateText = await this.dates.nth(j).innerText();
                
                const [day, month, year] = dateText.split('/').map(Number);
                const date = new Date(year, month-1, day);

                const isSameMonth = date.getMonth() === currentMonth;
                const isSameYear = date.getFullYear() === currentYear;
                expect(isSameMonth && isSameYear).toBeTruthy();
                
            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if(hasNextPage){
                await this.nextPageButton.click();
                
            }

        }
        
    }

    async chechMonthInCurrentMonth(){
        const monthMap: { [key: string]: number } = {
            'Oca': 0, 'Şub': 1, 'Mar': 2, 'Nis': 3, 'May': 4, 'Haz': 5,
            'Tem': 6, 'Ağu': 7, 'Eyl': 8, 'Eki': 9, 'Kas': 10, 'Ara': 11
        };

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        let hasNextPage = true;


        while(hasNextPage){

            await this.page.waitForTimeout(500);

            let datesCount = await this.dates.count();

            for(let j=0; j < datesCount; j++ ){


                const dateText = await this.dates.nth(j).innerText();
                
                const [monthName, yearText] = dateText.split(' ');
                const month = monthMap[monthName];
                const year = Number(yearText);

                const isSameMonth = month === currentMonth;
                const isSameYear = year === currentYear;

                expect(isSameMonth && isSameYear).toBeTruthy();
                
            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if(hasNextPage){
                await this.nextPageButton.click();
                
            }

        }
    }

    async checkFacilityNames() {
        const dropdownCount = await this.facilitiesOptions.count();

        const dropdownFacilityNames: string [] = [];

        for (let i = 0; i < dropdownCount; i++) {
            const facilityName = await this.facilitiesOptions.nth(i).innerText();
            dropdownFacilityNames.push(facilityName.trim());
        }

        let hasNextPage = true;
        const reportFacilityNames: string[] = [];

        while (hasNextPage) {
          
            const reportCount = await this.facilitiesName.count();
    
            for (let i = 0; i < reportCount; i++) {
                const facilityName = await this.facilitiesName.nth(i).innerText();
                reportFacilityNames.push(facilityName.trim());
            }
        }

        hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if(hasNextPage){
                await this.nextPageButton.click();
                
            }

            reportFacilityNames.forEach(facilityName => {
                expect(dropdownFacilityNames.includes(facilityName)).toBeTruthy();
            });
        
            // Optionally, log facilities in the dropdown that have no corresponding data on the Report page
            dropdownFacilityNames.forEach(facilityName => {
                if (!reportFacilityNames.includes(facilityName)) {
                    console.log(`Facility ${facilityName} is in the dropdown but has no data on any report page.`);
                }
            });    

    }
}

module.exports = {ReportPage};