Feature: As a user, I should be able to display Data Page, sort and filter all data

Background:
    Given User should be able to login
    When User click on Veriler tab on navbar

Scenario: User should be able to filter data by brands name
    Given User select "ofis test" option from brands dropdown
    Then Verify that the selected brand's data are displayed on Data Page

Scenario: User should be able to reset brands filter when click on x button
    Given User select "ofis test" option from brands dropdown
    When User click on x button
    Then Verify that the all brands data are displayed on Data Page

Scenario: User should be able to filter data by facility name
    Given User select "test1" option from facilities dropdown
    Then Verify that the selected facility's data are displayed on Data Page

Scenario: User should be able to reset facility filter when click on x button
    Given User select "test1" option from facilities dropdown
    When User click on x button
    Then Verify that the all facilities data are displayed on Data Page

Scenario: User should be able to display selected brand's facilities on facilities dropdown
    Given User select "ofis test" option from brands dropdown
    Then Verify that the all facilities belonging to the brand are displayed under the facilities drop-down menu

Scenario: User should be able to search brands name when enter valid value on brands filter tab
    Given User enter a value on brands filter as "Mar"
    Then Verify that the brands name contain the value are displayed on brands filter tab

Scenario: User should not be able to search brand name when enter invalid value on brands filter tab
    Given User enter a value on brands filter as "asdf"
    Then Verify that the error message " Veri yok " is displayed on brands filter tab

Scenario: User should be able to search facility name when enter valid value on facility filter tab
    Given User enter a value on facility filter as "ka"
    Then Verify that the facility name contain the value are displayed on facility filter tab

Scenario: User should not be able to search facility name when enter invalid value on facility filter tab
    Given User enter a value on facility filter as "asdf"
    Then Verify that the error message " Veri yok " is displayed on facility filter tab

Scenario: User should be able to filter data by date period
    Given User select "Bu Hafta" option on date filter
    Then Verify that the this week is diplayed on date filter

Scenario: User should be able to navigate specific page 
    Given User select this month option from date dropdown
    When User click on 2 button on pagination section
    Then Verify that the 2 page set of data are displayed

Scenario: User should be able to navigate next page 
    Given User select this month option from date dropdown
    When User click on > button on pagination section
    Then Verify that the next page set of data are displayed

Scenario: User should not be able to navigate previous page when on first page 
    Given User select this month option from date dropdown
    When User click on < button on pagination section
    Then Verify that the < is not enable

Scenario: User should be able to navigate previous data page 
    Given User select this month option from date dropdown
    When User click on 2 button on pagination section
    And User click on < button on pagination section
    Then Verify that the 1 page set of data are displayed

Scenario: User should not be able to navigate next page when on last page 
    Given User select this month option from date dropdown
    When User click on last page button on pagination section
    Then Verify that the > is not enable

Scenario: User should be able to navigate first page when change brand name filter
    Given User select this month option from date dropdown
    When User click on last page button on pagination section
    And User select a facility option on facility filter as "Macro"
    Then Verify that first page is diplayed

Scenario: User should be able to navigate first page when change facility name filter
    Given User select this month option from date dropdown
    When User click on last page button on pagination section
    And User select a facility option on facility filter as "5898 Maslak 1453 AVM"
    Then Verify that first page is diplayed

Scenario: User should be able to navigate first page when change period filter
    Given User select this month option from date dropdown
    When User click on last page button on pagination section
    And User select monthly option from basis dropdown
    Then Verify that first page is diplayed