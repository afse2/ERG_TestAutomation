import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";
import { expect } from "playwright/test";
import { parse, isToday, isThisWeek, isThisMonth, isThisYear, isSameDay } from 'date-fns';





export class ReportPage extends BasePage {
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
    facilitiesOptions: Locator;
    facilitiesName: Locator;
    facilityFilterInput: Locator;
    noDataDropdown: Locator;
    selectedFacility: Locator;
    facilityFilterClear: Locator;
    complianceRateDropdown: Locator;
    complianceRateOptions: Locator;
    comlianceRates: Locator;
    noDataMessage: Locator;
    dateOptions: Locator;
    dateTableHeader: Locator;
    complianceTableHeader: Locator;
    facilityTableHeader: Locator;
    successTableHeader: Locator;
    failTableHeader: Locator;
    unexpectedSuccessTableHeader: Locator;
    unexpectedFailTableHeader: Locator;
    totalTableHeader: Locator;
    

    constructor(page: Page) {
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
        this.facilitiesOptions = page.locator(".v-vl-visible-items span");
        this.facilityFilterInput = page.locator("input.n-base-selection-input");
        this.noDataDropdown = page.locator("div.n-base-select-menu__empty");
        this.selectedFacility = page.locator("div.n-base-selection-overlay__wrapper span");
        this.facilityFilterClear = page.locator("div.n-base-clear__clear");
        this.complianceRateDropdown = page.locator("button.n-button--tertiary-type").nth(0);
        this.complianceRateOptions = page.locator("n-radio check-item");
        this.comlianceRates = page.locator("td[data-col-key='compliance']");
        this.noDataMessage = page.locator("div.n-data-table-empty");
        this.dateOptions = page.locator("div.n-dropdown-option");
        this.dateTableHeader = page.locator("th[data-col-key='timestamp']");
        this.complianceTableHeader = page.locator("th[data-col-key='compliance']");
        this.facilityTableHeader = page.locator("th[data-col-key='facilityName']");
        this.successTableHeader = page.locator("th[data-col-key='success']");
        this.failTableHeader = page.locator("th[data-col-key='fail']");
        this.unexpectedSuccessTableHeader = page.locator("th[data-col-key='unexpected_success']");
        this.unexpectedFailTableHeader = page.locator("th[data-col-key='unexpected_fail']");
        this.totalTableHeader = page.locator("th[data-col-key='total']");





    }


    async checkDatesInCurrentMonth() {


        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        let hasNextPage = true;


        while (hasNextPage) {

            await this.page.waitForTimeout(500);

            let datesCount = await this.dates.count();

            for (let j = 0; j < datesCount; j++) {


                const dateText = await this.dates.nth(j).innerText();

                const [day, month, year] = dateText.split('/').map(Number);
                const date = new Date(year, month - 1, day);

                const isSameMonth = date.getMonth() === currentMonth;
                const isSameYear = date.getFullYear() === currentYear;
                expect(isSameMonth && isSameYear).toBeTruthy();

            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();

            }

        }

    }

    async chechMonthInCurrentMonth() {
        const monthMap: { [key: string]: number } = {
            'Oca': 0, 'Şub': 1, 'Mar': 2, 'Nis': 3, 'May': 4, 'Haz': 5,
            'Tem': 6, 'Ağu': 7, 'Eyl': 8, 'Eki': 9, 'Kas': 10, 'Ara': 11
        };

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        let hasNextPage = true;


        while (hasNextPage) {

            await this.page.waitForTimeout(500);

            let datesCount = await this.dates.count();

            for (let j = 0; j < datesCount; j++) {


                const dateText = await this.dates.nth(j).innerText();

                const [monthName, yearText] = dateText.split(' ');
                const month = monthMap[monthName];
                const year = Number(yearText);

                const isSameMonth = month === currentMonth;
                const isSameYear = year === currentYear;

                expect(isSameMonth && isSameYear).toBeTruthy();

            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();

            }

        }
    }

    async checkFacilityNames() {

        //await this.facilityDropdown.click();
        const dropdownCount = await this.facilitiesOptions.count();

        const dropdownFacilityNames: string[] = [];

        for (let i = 1; i < dropdownCount; i++) {
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

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();

            }

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

    async isSearchWordInFacility(searchTerm: string) {
        let hasNextPage = true;

        while (hasNextPage) {

            const reportCount = await this.facilitiesName.count();

            for (let i = 0; i < reportCount; i++) {
                const facilityName = await this.facilitiesName.nth(i).innerText();
                expect(facilityName.toLowerCase()).toContain(searchTerm.toLowerCase());
            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();

            }

        }
    }

    async selectFacilityFromFilter(facilitiesName: string) {
        const dropdownCount = await this.facilitiesOptions.count();
        for (let i = 1; i < dropdownCount; i++) {

            if (await this.facilitiesOptions.nth(i).innerText() == facilitiesName) {
                return await this.facilitiesOptions.nth(i).click();
            }

        }
    }

    async checkSelectedFacilityFilter() {
        const selectedFacility = await this.selectedFacility.textContent();

        let hasNextPage = true;

        while (hasNextPage) {

            const reportCount = await this.facilitiesName.count();

            for (let i = 0; i < reportCount; i++) {
                const facilityName = await this.facilitiesName.nth(i).innerText();
                expect(facilityName).toEqual(selectedFacility);
            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();

            }

        }

    }

    async selectComplianceRate(complianceRate: string) {
        const optionsCount = await this.complianceRateOptions.count();

        for (let i = 0; i < optionsCount; i++) {

            if (await this.complianceRateOptions.nth(i).textContent() == complianceRate) {
                return await this.complianceRateOptions.nth(i).click();
            }
        }
    }

    async checkComplianceRate(rate: string) {
        const range = rate.match(/%(\d+) - (\d+)/);
        const minRate = parseFloat(range[1]);
        const maxRate = parseFloat(range[2]);

        const noDataVisible = await this.noDataMessage.isVisible();

        if (noDataVisible) {
            expect(await this.noDataMessage.innerText()).toContain('Veri yok');
            return;
        }

        let hasNextPage = true;

        while (hasNextPage) {

            const rateCount = await this.comlianceRates.count();

            for (let i = 0; i < rateCount; i++) {
                const rateText = await this.comlianceRates.nth(i).innerText();
                const complianceRate = parseFloat(rateText.replace('%', '').trim());

                expect(complianceRate).toBeGreaterThanOrEqual(minRate);
                expect(complianceRate).toBeLessThanOrEqual(maxRate);
            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();

            }

        }

    }

    async selectDate(date: string) {
        const dateCount = await this.dateOptions.count();

        for (let i = 0; i < dateCount; i++) {
            if (await this.dateOptions.nth(i).textContent() == date) {
                await this.dateOptions.nth(i).click();
                return i;
            }
        }

    }

    async chechDataDateMatchSelectedFilter(dateOptionNumber: number) {

        let isDateInRange: (date: Date) => boolean;

        const today = new Date();

        let dateFilter: string;

        switch(dateOptionNumber){
            case 0:
                dateFilter = 'Today';
                break;
            case 1:
                dateFilter = 'This Week';
                break;
            case 2:
                dateFilter = 'Last Week';
                break;
            case 3:
                dateFilter = 'This Month';
                break;
            case 4: 
                dateFilter = 'This Year';
                break;
        }

        switch (dateFilter) {

            case 'Today':
                isDateInRange = (date) => isToday(date);
                break;
            case 'This Week':
                isDateInRange = (date) => isThisWeek(date);
                break;
            case 'Last Week':
                isDateInRange = (date) => {
                    const lastWeekStart = new Date(today);
                    lastWeekStart.setDate(today.getDate() - today.getDay() - 6);
                    const lastWeekEnd = new Date(lastWeekStart);
                    lastWeekEnd.setDate(lastWeekStart.getDate() + 6);
                    return date >= lastWeekStart && date <= lastWeekEnd;
                };
                break;
            case 'This Month':
                isDateInRange = (date) => isThisMonth(date);
                break;
            case 'This Year':
                isDateInRange = (date) => isThisYear(date);
                break;
            case 'Custom Date':
                // Assume you handle custom date selection elsewhere in your test
                // You would need to pass the custom date range to this function
                throw new Error("Custom Date handling not implemented in this function");
            default:
                throw new Error(`Unknown date filter: ${dateFilter}`);

        }

        let hasNextPage = true;

        while (hasNextPage) {

            const dateCount = await this.dates.count();

            for (let i = 0; i < dateCount; i++) {
                const dateText = await this.dates.nth(i).innerText();
                const dataDate = parse(dateText, 'dd/mm/yyyy', new Date());

                if (!isDateInRange(dataDate)) {
                    throw new Error(`Date ${dateText} does not match the selected filter ${dateFilter}`);
                }

            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();

            }

        }


    }


}

module.exports = { ReportPage };