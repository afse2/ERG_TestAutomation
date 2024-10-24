@YR-2620
Feature: As a user, I should be able to display Devices Page; add, edit, sort and filter all devices.

Background:
    Given User should be able to login
    When User click on Devices tab on navbar

@YR-2364
Scenario: User should be able to create a new device on Devices Page
    Given User click on Add Device button
    When User enter mac id as "AF:AF:AF:12:34:56"
    And User select device type as "Sabun"
    And User click on Add button
    Then Verify that the device with mac id "AF:AF:AF:12:34:56" and device type "Sabun" is displayed on Devices Page

@YR-2366
Scenario: User should not be able to create a new device with same name as the existing device
    Given User click on Add Device button
    When User enter mac id as "AF:AF:AF:12:34:56"
    And User select device type as "Sabun"
    And User click on Add button
    Then Verify that the error toast "Cihaz halihazırda var" is diplayed on Devices Page

@YR-2368 
Scenario: User should be able to edit a existing device
    Given User click on three dots sign near the selected gateway device "AF:AF:AF:12:34:56"
    When User click on edit option from dropdown
    And User select device type as "Gateway"
    And User click on save changes button on Devices Page
    Then Verify that the device with mac id "AF:AF:AF:12:34:56" and device type "Gateway" is displayed on Devices Page

@YR-2370
Scenario: User should be able to display edit options when click on three dots sign 
    Given User click on three dots sign near the selected device "AF:AF:AF:12:34:56"
    Then Verify that the options "Düzenle", "Sil", "Tb access token" are displayed on edit menu

@YR-2372
Scenario: User should be able to renew the thingsboard token of a gateway device
    Given User click on three dots sign near the selected gateway device "AF:AF:AF:12:34:56"
    When User click on Thingsboard access token option
    And User click on renew token button
    Then Verify that the new access token is diplayed when user click on Thingsboard access token option

@YR-2374
Scenario: User should be able to search a device with mac id
    Given User enter a valid value as "AF" into search input box
    Then Verify that the searched device is displayed on Devices Page

@YR-2376
Scenario: User should not be able to search a device with invalid value
    Given User enter a invalid value as "asd" into search input box
    Then Verify that the No Data message is displayed on Devices Page

@YR-2378
Scenario: User should be able to filter devices by brands name
    Given User select "Ofis Test" option from brands dropdown
    Then Verify that the selected brand's devices are displayed on Devices Page

@YR-2380
Scenario: User should be able to reset brands filter when click on x button
    Given User select "Ofis Test" option from brands dropdown
    When User click on x button on brands filter
    Then Verify that the all brands devices are displayed on Devices Page

@YR-2382
Scenario: User should be able to filter devices by facility name
    Given User select "Test" option from facilities dropdown
    Then Verify that the selected facility's devices are displayed on Devices Page

@YR-2384
Scenario: User should be able to reset facility filter when click on x button
    Given User select "Test" option from facilities dropdown
    When User click on x button on facility filter
    Then Verify that the all facilities devices are displayed on Devices Page

@YR-2388
Scenario: User should be able to filter devices by device type
    Given User select "Gateway" option from device type dropdown
    Then Verify that the selected devices type are diplayed on Devices Page

@YR-2390
Scenario: User should be able to reset device type filter when click on x button
    Given User select "Gateway" option from device type dropdown
    When User click on x button on device type dropdown
    Then Verify that the all devices type are displayed on Devices Page

@YR-2392
Scenario: User should be able to search brands name when enter valid value on brands filter tab
    Given User enter a value on brands filter as "Ofi"
    Then Verify that the brands name contain the value are displayed on brands filter tab

@YR-2394
Scenario: User should not be able to search brand name when enter invalid value on brands filter tab
    Given User enter a value on brands filter as "asdf"
    Then Verify that the error message "Veri yok" is displayed on brands filter tab

@YR-2396
Scenario: User should be able to search facility name when enter valid value on facility filter tab
    Given User enter a value on facility filter as "te"
    Then Verify that the facility name contain the value are displayed on facility filter tab

@YR-2398
Scenario: User should not be able to search facility name when enter invalid value on facility filter tab
    Given User enter a value on facility filter as "asdf"
    Then Verify that the error message "Veri yok" is displayed on facility filter tab

@YR-2400
Scenario: User should be able to search device type name when enter valid value on device type filter tab
    Given User enter a value on device type filter as "ga"
    Then Verify that the device type name contain the value are displayed on device type filter tab

@YR-2402
Scenario: User should not be able to search device type name when enter invalid value on device type filter tab
    Given User enter a value on device type filter as "asdf"
    Then Verify that the error message "Veri yok" is displayed on device type filter tab

@YR-2404
Scenario: User should be able to navigate desired page on Devices Page
    Given User click on "2" pagination section
    Then Verify that the "2" page is displayed

@YR-2406
Scenario: User should be able to navigate next page when click on next page button
    Given User click on > button
    Then Verify that the next page is displayed 

@YR-2408
Scenario: User should be able to navigate previous page
    Given User click on "2" pagination section
    When User click on < button
    Then Verify that the previous page is displayed

@YR-2410
Scenario: User should not be able to navigate previous page when land on the first page
    Given User click on "1" pagination section
    Then Verify that the < button is not enable

@YR-2412
Scenario: User should not be able to navigate next page when land on the last page 
    Given User click on last page button on pagination section
    Then Verify that the > button is not enable

@YR-2414
Scenario: User should be able to navigate first page change Brands filter
    Given User click on last page button on pagination section
    When User select "Ofis Test" option from brands dropdown
    Then Verify that first page is displayed

@YR-2416
Scenario: User should be able to navigate first page change Facility filter
    Given User click on last page button on pagination section
    When User select "Test" option from facilities dropdown
    Then Verify that first page is displayed

@YR-2418
Scenario: User should be able to navigate first page when change Device type filter
    Given User click on last page button on pagination section
    When User select "Gateway" option from device type dropdown
    Then Verify that first page is displayed

@YR-2420
Scenario: User should not be able to delete an existing device when click on X button
    Given User click on three dots sign near the selected device "AF:AF:AF:12:34:56"
    When User click on delete button
    And User click on X button on delete device pop-up
    Then Verify that the device with mac id "AF:AF:AF:12:34:56" and device type "Gateway" is displayed on Devices Page

@YR-2422
Scenario: User should be able to delete an existing device
    Given User click on three dots sign near the selected device "AF:AF:AF:12:34:56"
    When User click on delete button 
    And User click on delete device button
    Then Verify that the device with mac id "AF:AF:AF:12:34:56" is not displayed on Device Page
    



