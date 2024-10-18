import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";
import { expect } from "playwright/test";
import { parse, isToday, isThisWeek, isThisMonth, isThisYear, isSameDay, startOfWeek, endOfWeek, isWithinInterval, startOfDay, endOfDay, format } from 'date-fns';





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
    complianceRates: Locator;
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
    dateRange: Locator;
    successNumber: Locator;
    failNumber: Locator;
    unexpectedSuccessNumber: Locator;
    unexpectedFailNumber: Locator;
    totalNumber: Locator;
    paginationNumbers: Locator;
    paginationMenu: Locator;


    constructor(page: Page) {
        super(page);

        this.reportTab = page.locator("div.item:has-text('Raporlar')");
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
        this.complianceRateOptions = page.locator("n-radio__label");
        this.complianceRates = page.locator("td[data-col-key='compliance']");
        this.noDataMessage = page.locator("div.n-data-table-empty");
        this.dateRange = page.locator("span.n-button__content label");
        this.dateOptions = page.locator("div.n-dropdown-option-body__label");
        this.dateTableHeader = page.locator("th[data-col-key='timestamp']");
        this.complianceTableHeader = page.locator("th[data-col-key='compliance']");
        this.facilityTableHeader = page.locator("th[data-col-key='facilityName']");
        this.successTableHeader = page.locator("th[data-col-key='success']");
        this.failTableHeader = page.locator("th[data-col-key='fail']");
        this.unexpectedSuccessTableHeader = page.locator("th[data-col-key='unexpected_success']");
        this.unexpectedFailTableHeader = page.locator("th[data-col-key='unexpected_fail']");
        this.totalTableHeader = page.locator("th[data-col-key='total']");
        this.successNumber = page.locator("td[data-col-key='success']");
        this.failNumber = page.locator("td[data-col-key='fail']");
        this.unexpectedSuccessNumber = page.locator("td[data-col-key='unexpected_success']");
        this.unexpectedFailNumber = page.locator("td[data-col-key='unexpected_fail']");
        this.totalNumber = page.locator("td[data-col-key='total']");
        this.paginationNumbers = page.locator("div.n-pagination-item:not(.n-pagination-item--button)");
        this.paginationMenu = page.locator("div[class='n-pagination-item']");

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

        await this.page.getByLabel(complianceRate).check();
        // const optionsCount = await this.complianceRateOptions.count();
        // console.log(optionsCount);

        // for (let i = 0; i < optionsCount; i++) {
        //     console.log(await this.complianceRateOptions.nth(i).textContent());
        //     //console.log(complianceRate);

        //     if (await this.complianceRateOptions.nth(i).textContent() == complianceRate) {
        //         console.log("inside if");
        //         return await this.complianceRateOptions.nth(i).click();
        //     }
        // }
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

            const rateCount = await this.complianceRates.count();

            for (let i = 0; i < rateCount; i++) {
                const rateText = await this.complianceRates.nth(i).innerText();
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
        let dateRange = await this.dateRange.innerText();

        const today = new Date();

        let dateFilter: string;

        switch (dateOptionNumber) {
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
            case 'Today': {
                const today = startOfDay(new Date());
                isDateInRange = (date) => date.getTime() === today.getTime();
                console.log(`Date Range for Today: ${format(today, 'dd/MM/yyyy')}`);
                break;
            }
            case 'This Week': {
                const today = new Date();
                const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 }); // Monday start
                const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 1 }); // Sunday end
                // Convert to the start and end of day for proper comparison
                const startOfWeekDay = startOfDay(startOfCurrentWeek);
                const endOfWeekDay = endOfDay(endOfCurrentWeek);
                dateRange = `${format(startOfWeekDay, 'dd/MM/yyyy')} - ${format(endOfWeekDay, 'dd/MM/yyyy')}`;
                isDateInRange = (date) => isWithinInterval(date, { start: startOfWeekDay, end: endOfWeekDay });
                console.log(`Date Range for This Week: ${dateRange}`);
                break;
            }
            case 'Last Week': {
                const [startDateStr, endDateStr] = dateRange.split(' - ').map(date => date.trim());
                const startDate = startOfDay(parse(startDateStr, 'dd/MM/yyyy', new Date()));
                const endDate = endOfDay(parse(endDateStr, 'dd/MM/yyyy', new Date()));
                isDateInRange = (date) => isWithinInterval(date, { start: startDate, end: endDate });
                console.log(`Date Range for Last Week: ${dateRange}`);
                break;
            }
            case 'This Month': {
                const today = new Date();
                const startOfMonth = startOfDay(new Date(today.getFullYear(), today.getMonth(), 1));
                const endOfMonth = endOfDay(new Date(today.getFullYear(), today.getMonth() + 1, 0));
                isDateInRange = (date) => isWithinInterval(date, { start: startOfMonth, end: endOfMonth });
                console.log(`Date Range for This Month: ${format(startOfMonth, 'dd/MM/yyyy')} - ${format(endOfMonth, 'dd/MM/yyyy')}`);
                break;
            }
            case 'This Year': {
                const today = new Date();
                const startOfYear = startOfDay(new Date(today.getFullYear(), 0, 1));
                const endOfYear = endOfDay(new Date(today.getFullYear(), 11, 31));
                isDateInRange = (date) => isWithinInterval(date, { start: startOfYear, end: endOfYear });
                console.log(`Date Range for This Year: ${format(startOfYear, 'dd/MM/yyyy')} - ${format(endOfYear, 'dd/MM/yyyy')}`);
                break;
            }
            case 'Custom': {
                // dateRange = await page.locator('.custom-date-range-selector').innerText(); // Example selector
                // const [startDateStr, endDateStr] = dateRange.split(' - ').map(date => date.trim());
                // const startDate = startOfDay(parse(startDateStr, 'dd/MM/yyyy', new Date()));
                // const endDate = endOfDay(parse(endDateStr, 'dd/MM/yyyy', new Date()));
                // isDateInRange = (date) => isWithinInterval(date, { start: startDate, end: endDate });
                // console.log(`Custom Date Range: ${dateRange}`);
                // break;
            }
            default:
                throw new Error(`Unsupported date filter: ${dateFilter}`);
        }

        let hasNextPage = true;

        while (hasNextPage) {

            const dateCount = await this.dates.count();

            for (let i = 0; i < dateCount; i++) {
                const dateText = await this.dates.nth(i).innerText();
                const parsedDate = parse(dateText, 'dd/MM/yyyy', new Date());

                // Convert parsed date to start of day for comparison
                const dateToCompare = startOfDay(parsedDate);

                if (!isDateInRange(dateToCompare)) {
                    console.error(`Date ${format(dateToCompare, 'dd/MM/yyyy')} does not match the selected filter ${dateFilter}`);
                    throw new Error(`Date ${format(dateToCompare, 'dd/MM/yyyy')} does not match the selected filter ${dateFilter}`);
                }

                hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

                if (hasNextPage) {
                    await this.nextPageButton.click();

                }

            }
        }


    }



    async checkDateSorting(sortOrder: 'ascending' | 'descending') {
        let allDates: Date[] = [];
        let hasNextPage = true;

        while (hasNextPage) {
            // Step 1: Retrieve all the dates from the current page

            const dateCount = await this.dates.count();

            for (let i = 0; i < dateCount; i++) {
                const dateText = await this.dates.nth(i).innerText();
                const parsedDate = parse(dateText, 'dd/MM/yyyy', new Date());
                allDates.push(parsedDate);
            }

            // Step 2: Check if there is a next page
            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(2000);

            }
        }


        // Step 3: Check if dates are sorted in the specified order
        for (let i = 0; i < allDates.length - 1; i++) {
            if (sortOrder === 'ascending' && allDates[i] > allDates[i + 1]) {
                throw new Error('Dates are not sorted in ascending order.');
            }
            if (sortOrder === 'descending' && allDates[i] < allDates[i + 1]) {
                throw new Error('Dates are not sorted in descending order.');
            }
        }

        console.log(`Dates are sorted in ${sortOrder} order.`);
    }

    // Function to check compliance rate sorting
    async checkComplianceRateSorting(sortOrder: 'ascending' | 'descending') {

        // Step 1: Retrieve and parse the compliance rate values
        const complianceRates = [];
        
        let hasNextPage = true;

        while (hasNextPage) {
            // Step 1: Retrieve all the dates from the current page

            const complianceCount = await this.complianceRates.count();
            for (let i = 0; i < complianceCount; i++) {
                const rateText = await this.complianceRates.nth(i).innerText();
                // Remove any % symbol and trim spaces, then parse as number
                const rateValue = parseFloat(rateText.replace('%', '').trim());
                complianceRates.push(rateValue);
            }

            // Step 2: Check if there is a next page
            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(2000);

            }
        }

        // Step 2: Check if the compliance rates are sorted correctly
        let isSorted = true;

        if (sortOrder === 'ascending') {
            for (let i = 1; i < complianceRates.length; i++) {
                if (complianceRates[i] < complianceRates[i - 1]) {
                    console.log(complianceRates[i]);
                    console.log(complianceRates[i-1]);
                    isSorted = false;
                    break;
                }
            }
        } else if (sortOrder === 'descending') {
            for (let i = 1; i > complianceRates.length; i++) {
                if (complianceRates[i] < complianceRates[i - 1]) {
                    isSorted = false;
                    break;
                }
            }
        }

        // Step 4: Log and validate the sorting result
        // console.log(`Compliance Rates: ${complianceRates.join(', ')}`);
        // console.log(`Expected Sort Order: ${sortOrder}`);

        expect(isSorted, `Compliance rates are not sorted in ${sortOrder} order`).toBeTruthy();
    }

    async checkFacilityNameSorting(sortOrder: 'ascending' | 'descending') {
    
        // Step 2: Retrieve and store the facility names
        const facilityNames = [];
       

        let hasNextPage = true;

        while (hasNextPage) {
            // Step 1: Retrieve all the dates from the current page
            const facilityCount = await this.facilitiesName.count();

            for (let i = 0; i < facilityCount; i++) {
                const nameText = await this.facilitiesName.nth(i).innerText();
                facilityNames.push(nameText.trim());
            }
           
            // Step 2: Check if there is a next page
            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(2000);

            }
        }
    
        
    
        // Step 3: Check if the facility names are sorted correctly
        let isSorted = true;
        const sortedNames = [...facilityNames].sort((a, b) => a.localeCompare(b));
    
        if (sortOrder === 'ascending') {
            for (let i = 0; i < facilityNames.length; i++) {
                if (facilityNames[i] !== sortedNames[i]) {
                    isSorted = false;
                    break;
                }
            }
        } else if (sortOrder === 'descending') {
            const sortedDescendingNames = sortedNames.reverse();
            for (let i = 0; i < facilityNames.length; i++) {
                if (facilityNames[i] !== sortedDescendingNames[i]) {
                    isSorted = false;
                    break;
                }
            }
        }
    
        // Step 4: Log and validate the sorting result
        console.log(`Facility Names: ${facilityNames.join(', ')}`);
        console.log(`Expected Sort Order: ${sortOrder}`);
    
        expect(isSorted, `Facility names are not sorted in ${sortOrder} order`).toBeTruthy();
    }

    async checkSuccessSorting(sortOrder: 'ascending' | 'descending') {
        
        // Step 2: Retrieve and store the success numbers
        const successNumbers = [];
        

        let hasNextPage = true;

        while (hasNextPage) {
            // Step 1: Retrieve all the dates from the current page
            const successCount = await this.successNumber.count();
            
             
        for (let i = 0; i < successCount; i++) {
            const numberText = await this.successNumber.nth(i).innerText();
            // Parse the number text to integer or float depending on your data
            const numberValue = parseFloat(numberText.replace(',', '.').trim());
            successNumbers.push(numberValue);
        }
            // Step 2: Check if there is a next page
            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(2000);

            }
        }
      
    
        // Step 3: Check if the success numbers are sorted correctly
        let isSorted = true;
        const sortedNumbers = [...successNumbers].sort((a, b) => a - b); // Ascending sort
    
        if (sortOrder === 'ascending') {
            for (let i = 0; i < successNumbers.length; i++) {
                if (successNumbers[i] !== sortedNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        } else if (sortOrder === 'descending') {
            const sortedDescendingNumbers = sortedNumbers.reverse();
            for (let i = 0; i < successNumbers.length; i++) {
                if (successNumbers[i] !== sortedDescendingNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        }
    
        // Step 4: Log and validate the sorting result
        console.log(`Success Numbers: ${successNumbers.join(', ')}`);
        console.log(`Expected Sort Order: ${sortOrder}`);
    
        expect(isSorted, `Success numbers are not sorted in ${sortOrder} order`).toBeTruthy();
    }

    async checkFailSorting(sortOrder: 'ascending' | 'descending') {
        
        // Step 2: Retrieve and store the success numbers
        const failNumber = [];
        

        let hasNextPage = true;

        while (hasNextPage) {
            // Step 1: Retrieve all the dates from the current page
            const successCount = await this.failNumber.count();
            
             
        for (let i = 0; i < successCount; i++) {
            const numberText = await this.failNumber.nth(i).innerText();
            // Parse the number text to integer or float depending on your data
            const numberValue = parseFloat(numberText.replace(',', '.').trim());
            failNumber.push(numberValue);
        }
            // Step 2: Check if there is a next page
            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(2000);

            }
        }
      
    
        // Step 3: Check if the success numbers are sorted correctly
        let isSorted = true;
        const sortedNumbers = [...failNumber].sort((a, b) => a - b); // Ascending sort
    
        if (sortOrder === 'ascending') {
            for (let i = 0; i < failNumber.length; i++) {
                if (failNumber[i] !== sortedNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        } else if (sortOrder === 'descending') {
            const sortedDescendingNumbers = sortedNumbers.reverse();
            for (let i = 0; i < failNumber.length; i++) {
                if (failNumber[i] !== sortedDescendingNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        }
    
        // Step 4: Log and validate the sorting result
        console.log(`Success Numbers: ${failNumber.join(', ')}`);
        console.log(`Expected Sort Order: ${sortOrder}`);
    
        expect(isSorted, `Success numbers are not sorted in ${sortOrder} order`).toBeTruthy();
    }

    async checkUnexpectedSuccessSorting(sortOrder: 'ascending' | 'descending') {
        
        // Step 2: Retrieve and store the success numbers
        const unexpectedSuccessNumber = [];
        

        let hasNextPage = true;

        while (hasNextPage) {
            // Step 1: Retrieve all the dates from the current page
            const successCount = await this.unexpectedSuccessNumber.count();
            
             
        for (let i = 0; i < successCount; i++) {
            const numberText = await this.unexpectedSuccessNumber.nth(i).innerText();
            // Parse the number text to integer or float depending on your data
            const numberValue = parseFloat(numberText.replace(',', '.').trim());
            unexpectedSuccessNumber.push(numberValue);
        }
            // Step 2: Check if there is a next page
            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(2000);

            }
        }
      
    
        // Step 3: Check if the success numbers are sorted correctly
        let isSorted = true;
        const sortedNumbers = [...unexpectedSuccessNumber].sort((a, b) => a - b); // Ascending sort
    
        if (sortOrder === 'ascending') {
            for (let i = 0; i < unexpectedSuccessNumber.length; i++) {
                if (unexpectedSuccessNumber[i] !== sortedNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        } else if (sortOrder === 'descending') {
            const sortedDescendingNumbers = sortedNumbers.reverse();
            for (let i = 0; i < unexpectedSuccessNumber.length; i++) {
                if (unexpectedSuccessNumber[i] !== sortedDescendingNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        }
    
        // Step 4: Log and validate the sorting result
        console.log(`Success Numbers: ${unexpectedSuccessNumber.join(', ')}`);
        console.log(`Expected Sort Order: ${sortOrder}`);
    
        expect(isSorted, `Success numbers are not sorted in ${sortOrder} order`).toBeTruthy();
    }

    async checkUnexpectedFailSorting(sortOrder: 'ascending' | 'descending') {
        
        // Step 2: Retrieve and store the success numbers
        const unexpectedFailNumber = [];
        

        let hasNextPage = true;

        while (hasNextPage) {
            // Step 1: Retrieve all the dates from the current page
            const successCount = await this.unexpectedFailNumber.count();
            
             
        for (let i = 0; i < successCount; i++) {
            const numberText = await this.unexpectedFailNumber.nth(i).innerText();
            // Parse the number text to integer or float depending on your data
            const numberValue = parseFloat(numberText.replace(',', '.').trim());
            unexpectedFailNumber.push(numberValue);
        }
            // Step 2: Check if there is a next page
            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(2000);

            }
        }
      
    
        // Step 3: Check if the success numbers are sorted correctly
        let isSorted = true;
        const sortedNumbers = [...unexpectedFailNumber].sort((a, b) => a - b); // Ascending sort
    
        if (sortOrder === 'ascending') {
            for (let i = 0; i < unexpectedFailNumber.length; i++) {
                if (unexpectedFailNumber[i] !== sortedNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        } else if (sortOrder === 'descending') {
            const sortedDescendingNumbers = sortedNumbers.reverse();
            for (let i = 0; i < unexpectedFailNumber.length; i++) {
                if (unexpectedFailNumber[i] !== sortedDescendingNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        }
    
        // Step 4: Log and validate the sorting result
        console.log(`Success Numbers: ${unexpectedFailNumber.join(', ')}`);
        console.log(`Expected Sort Order: ${sortOrder}`);
    
        expect(isSorted, `Success numbers are not sorted in ${sortOrder} order`).toBeTruthy();
    }

    async checkTotalSorting(sortOrder: 'ascending' | 'descending') {
        
        // Step 2: Retrieve and store the success numbers
        const totalNumber = [];
        

        let hasNextPage = true;

        while (hasNextPage) {
            // Step 1: Retrieve all the dates from the current page
            const successCount = await this.totalNumber.count();
            
             
        for (let i = 0; i < successCount; i++) {
            const numberText = await this.totalNumber.nth(i).innerText();
            // Parse the number text to integer or float depending on your data
            const numberValue = parseFloat(numberText.replace(',', '.').trim());
            totalNumber.push(numberValue);
        }
            // Step 2: Check if there is a next page
            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(2000);

            }
        }
      
    
        // Step 3: Check if the success numbers are sorted correctly
        let isSorted = true;
        const sortedNumbers = [...totalNumber].sort((a, b) => a - b); // Ascending sort
    
        if (sortOrder === 'ascending') {
            for (let i = 0; i < totalNumber.length; i++) {
                if (totalNumber[i] !== sortedNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        } else if (sortOrder === 'descending') {
            const sortedDescendingNumbers = sortedNumbers.reverse();
            for (let i = 0; i < totalNumber.length; i++) {
                if (totalNumber[i] !== sortedDescendingNumbers[i]) {
                    isSorted = false;
                    break;
                }
            }
        }
    
        // Step 4: Log and validate the sorting result
        console.log(`Success Numbers: ${totalNumber.join(', ')}`);
        console.log(`Expected Sort Order: ${sortOrder}`);
    
        expect(isSorted, `Success numbers are not sorted in ${sortOrder} order`).toBeTruthy();
    }

    async clickOnPage(targetPageNumber: number) {
         // Adjust the selector as needed
        
        const pageNumberLocator = `text=${targetPageNumber}`;

        // Check if the hover button exists (indicating more than 10 pages)
        const isHoverButtonVisible = await this.paginationMenu.isVisible();
    
        if (isHoverButtonVisible) {
            // Hover over the hover button to reveal the scrollable list of pages
            await this.paginationMenu.hover();
    
            // Scroll to the target page number and click it
            let isPageVisible = await this.paginationNumbers.locator(pageNumberLocator).isVisible();
            while (!isPageVisible) {
                // Scroll down within the pagination container to bring more pages into view
                await this.page.locator("div.n-scrollbar").last().evaluate(el => {
                    el.scrollBy(0, 50); // Adjust the scroll amount as needed to show more pages
                });
    
                // Check if the target page is now visible
                isPageVisible = await this.page.locator("div.n-base-select-option").locator(pageNumberLocator).isVisible();
            }
    
            // Click on the target page number once it is visible
            await this.page.locator("div.n-base-select-option").locator(pageNumberLocator).click();
        } else {
            // Directly click on the target page number if the hover button is not present
            await this.paginationNumbers.locator(pageNumberLocator).click();
        }
    }

}

module.exports = { ReportPage };