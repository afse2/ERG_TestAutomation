@YR-2340
Feature: As a user, I should be able to display Report page, sort and filter all report results

Background:
    Given User should be able to login
    When User click Raporlar tab on navbar

@YR-2266
Scenario: User should be able to display the monthly report on a daily basis
    Given User select "Bu Ay" option on date filter
    When User select daily option from basis dropdown
    Then Verify that the reports for the current month are displayed on a daily basis 

@YR-2267
Scenario: User should be able to display the monthly report on a monthly basis
    Given User select "Bu Ay" option on date filter
    When User select monthly option from basis dropdown
    Then Verify that the reports for the current month are displayed on a monthly basis

@YR-2268
Scenario: User should be able to display the reports of all facilities
    Given User select all option from facility dropdown
    Then Verify that all facilities are displayed on Facilities Report Page

@YR-2269
Scenario: User should be able to search facility name when write valid word on facility filter tab
    Given User enter a word on facility filter as "gar"
    Then Verify that the facilities contain the word "gar" are displayed on facility filter tab

@YR-2270
Scenario: User should not be able to search facility name when write invalid word on facility filter tab
    Given User enter a word on facility filter as "asdf"
    Then Verify that the error message " Veri yok " is displayed on facility filter tab

@YR-2271 
Scenario: User should be able to filter reports by facility options
    Given User select a facility option on facility filter as "5898 Maslak 1453 AVM"
    Then Verify that the selected facility is displayed on facility filter tab

@YR-2272
Scenario: User should be able to cancel the facility filter
    Given User select a facility option on facility filter as "5898 Maslak 1453 AVM"
    Then Verify that the selected facility is displayed on facility filter tab
    When User click on X button on facility filter
    Then Verify that the facility filter is displayed with all selected on Facility Report Page

@YR-2273 
Scenario: User should be able to filter the reports by compliance rate options
    Given User select a compliance rate option on compliance rate filter as " %0 - 20"
    Then Verify that the selected compliance rate is displayed on compliance rate filter tab

@YR-2275 
Scenario: User should be able to filter report by this week option
    Given User select "Bu Hafta" option on date filter
    Then Verify that the selected date is diplayed on date filter

@YR-2276 
Scenario: User should be able to sort report by date in descending order
    Given User select "Bu Ay" option on date filter
    Then Verify that the reports are sorted by date in descending order

@YR-2277 
Scenario: User should be able to sort report by date in ascending order
    Given User select "Bu Ay" option on date filter
    When User click on date column header
    Then Verify that the reports are sorted by date in ascending order

@YR-2278 
Scenario: User should be able to sort report by compliance rate in descending order
    Given User select "Bu Ay" option on date filter
    When User click on compliance rate column header
    Then Verify that the reports are sorted by compliance rate in descending order

@YR-2279
Scenario: User should be able to sort report by compliance rate in ascending order
    Given User select "Bu Ay" option on date filter
    When User dbclick on compliance rate column header
    Then Verify that the reports are sorted by compliance rate in ascending order

@YR-2280 
Scenario: User should be able to sort report by facilities name in descending order
    Given User click on facilities name column header
    Then Verify that the reports are sorted by facilities name in descending order

@YR-2281 
Scenario: User should be able to sort report by facilities name in ascending order
    Given User dbclick on facilities name column header
    Then Verify that the reports are sorted by facilities name in ascending order

@YR-2282 
Scenario: User should be able to sort report by success in descending order
    Given User click on success column header
    Then Verify that the reports are sorted by success in descending order

@YR-2283 
Scenario: User should be able to sort report by success in ascending order
    Given User dbclick on success column header
    Then Verify that the reports are sorted by success in ascending order

@YR-2284
Scenario: User should be able to sort report by fail in descending order
    Given User click on fail column header
    Then Verify that the reports are sorted by fail in descending order

@YR-2285
Scenario: User should be able to sort report by fail in ascending order
    Given User dbclick on fail column header
    Then Verify that the reports are sorted by fail in ascending order

@YR-2286 
Scenario: User should be able to sort report by unexpected success in descending order
    Given User click on unexpected success column header
    Then Verify that the reports are sorted by unexpected success in descending order

@YR-2287
Scenario: User should be able to sort report by unexpected success in ascending order
    Given User dbclick on unexpected success column header
    Then Verify that the reports are sorted by unexpected success in ascending order

@YR-2288
Scenario: User should be able to sort report by unexpected fail in descending order
    Given User click on unexpected fail column header
    Then Verify that the reports are sorted by unexpected fail in descending order

@YR-2289
Scenario: User should be able to sort report by unexpected fail in ascending order
    Given User dbclick on unexpected fail column header
    Then Verify that the reports are sorted by unexpected fail in ascending order

@YR-2290
Scenario: User should be able to sort report by total in descending order
    Given User click on total column header
    Then Verify that the reports are sorted by total in descending order

@YR-2291
Scenario: User should be able to sort report by total in ascending order
    Given User dbclick on total column header
    Then Verify that the reports are sorted by total in ascending order

@YR-2292 
Scenario: User should be able to navigate specific reports page 
    Given User select "Bu Ay" option on date filter
    When User click on 2 button on pagination section
    Then Verify that the 2 page set of reports are displayed

@YR-2293
Scenario: User should be able to navigate next reports page 
    Given User select "Bu Ay" option on date filter
    When User click on > button on pagination section
    Then Verify that the next page set of reports are displayed

@YR-2294
Scenario: User should not be able to navigate previous reports page when on first page 
    Given User select "Bu Ay" option on date filter
    When User click on < button on pagination section
    Then Verify that the < is not enable

@YR-2295
Scenario: User should be able to navigate previous reports page 
    Given User select "Bu Ay" option on date filter
    When User click on 2 button on pagination section
    And User click on < button on pagination section
    Then Verify that the 1 page set of reports are displayed

@YR-2296
Scenario: User should not be able to navigate next reports page when on last page 
    Given User select "Bu Ay" option on date filter
    When User click on last page button on pagination section
    Then Verify that the > is not enable

@YR-2297
Scenario: User should be able to navigate first page when change period filter
    Given User select "Bu Ay" option on date filter
    When User click on last page button on pagination section
    And User select monthly option from basis dropdown
    Then Verify that first page is diplayed

@YR-2298
Scenario: User should be able to navigate first page when change facility name filter
    Given User select "Bu Ay" option on date filter
    When User click on last page button on pagination section
    And User select a facility option on facility filter as "5898 Maslak 1453 AVM"
    Then Verify that first page is diplayed

@YR-2356
Scenario: User should be able to navigate first page when change compliance rate filter
    Given User select "Bu Ay" option on date filter
    When User click on last page button on pagination section
    And User select a compliance rate option on compliance rate filter as " %0 - 20"
    Then Verify that first page is diplayed

@YR-2357
Scenario: User should be able to navigate first page when change period filter
    Given User select "Bu Ay" option on date filter
    When User click on last page button on pagination section
    And User select today option on date filter
    Then Verify that first page is diplayed

@YR-2358
Scenario: User should be able to export report page as excel format
    Given User click on XLS button on Facility Report Page
    Then Verify that the downloaded excel file and reports page datas are matched

@YR-2359
Scenario: User should be able to filter the reports by a specific date range
    Given User select the start date as 
    When User select the end date as 
    And User select "Bu Hafta" option on date filter
    Then Verify that two options data are matched








