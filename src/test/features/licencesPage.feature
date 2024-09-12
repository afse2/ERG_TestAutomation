Feature: As a user, I should be able to display Licences Page; add, edit, sort and filter all licences.

Background: 
    Given User should be able to login 
    When User click on Licences tab on navbar

Scenario: User should be able to create a licence on Licences Page
    Given User click on add licence button
    When User select device from devices table
    And User select a valid validity period
    And User select a brand from brand dropdown
    And User select a facility from facility dropdown
    And User click on add button on Create Licence pop-up
    Then Verify that the success toast "cihaz basarili bir sekilde eklendi" is displayed on Licences Page

Scenario: User should not be able to create a licence with previously added device
    Given User click on add licence button
    Then Verify that the previously added devices is not selectable

Scenario: User should not be able to create a licence without filling in required fields
    Given User click on add licence button 
    When User click on add button on Create Licence pop-up
    Then Verify that the error toast "body must NOT have fewer than 1 items" is diplayed on Licences Page

Scenario: User should be able display edit options when click on three dots sign
    Given User click on three dots sign near the selected licence
    Then Verify that the options "İptal" and "Sil" are displayed on edit menu

Scenario: User should be able to search a licence with licence key
    Given User enter a search value as "hy" into search input box
    Then Verify that the licence key contain search value is diplayed on Licences Page

Scenario: User should not be able to search a licence with invalid licence key
    Given User enter a invalid value as "asd" into search input box
    Then Verify that the No Data message is displayed on Licences Page

Scenario: User should be able to filter licence by brands name
    Given User select "ofis test" option from brands dropdown
    Then Verify that the selected brand's licences are displayed on Licences Page

Scenario: User should be able to reset brands filter when click on x button 
    Given User select "ofis test" option from brands dropdown
    When User click on x button 
    Then Verify that the all brands licences are displayed on licences Page

Scenario: User should be able to filter licences by facility name
    Given User select "test1" option from facilities dropdown
    Then Verify that the selected facility's licences are displayed on Licences Page

Scenario: User should be able to reset facility filter when click on x button 
    Given User select "test1" option from facilities dropdown
    When User click on x button 
    Then Verify that the all facilities licences are displayed on Licences Page

Scenario: User should be able to filter licences by status 
    Given User select "Aktif" option from status dropdown
    Then Verify that the selected status licences are displayed on Licences Page

Scenario: User should be able to reset status filter when click on x button 
    Given User select "Aktif" option from status dropdown
    When User click on x button 
    Then Verify that the all status licences are displayed on Licences Page

Scenario: User should be able to search brands name when enter valid value on brands filter tab
    Given  Given User enter a value on brands filter as "Mar"
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

Scenario: User should be able to search status name when enter valid value on status filter tab
    Given User enter a value on status filter as "ak"
    Then Verify that the status contain the value are displayed on status filter tab

Scenario: User should not be able to search status name when enter invalid value on facility filter tab
    Given User enter a value on status filter as "asdf"
    Then Verify that the error message " Veri yok " is displayed on status filter tab

Scenario: User should be able to navigate desired page on licences Page
    Given User click on "2" pagination section on Licences Page
    Then Verify that the "2" page licence are displayed

Scenario: User should be able to navigate next page when click on > button
    Given User click on > button on Licences Page
    Then Verify that the next page is displayed

Scenario: User should be able to navigate previous page when click on < button
    Given User click on "2" pagination section on Licences Page
    When User click on save changes button on Licences Page
    Then Verify that the previous page is diplayed

Scenario: User should not be able to navigate previous page when land on the first page
    Given User click on 1 button on pagination section
    Then Verify that the < button is not enable

Scenario: User should not be able to navigate next page when land on the last page 
    Given User click on last page button on pagination section
    Then Verify that the > button is not enable

Scenario: User should be able to navigate first page when change Brands filter 
    Given User click on last page button on pagination section
    When User select "ofis test" option from brands dropdown
    Then Verify that first page is displayed on Licences Page

Scenario: User should be able to navigate first page when change Facility filter
    Given User click on last page button on pagination section
    When User select "Maslak" option from facilities dropdown
    Then Verify that first page is displayed on Licences Page

Scenario: User should be able to navigate first page when change status filter 
    Given User click on last page button on pagination section
    When User select "Aktif" option from status dropdown
    Then Verify that first page is displayed on Licences Page

Scenario: User should not be able to delete an existing licence when click on X button
    Given User click on three dots sign near the selected licence
    When User click on delete button
    And User click on X button on delete licence pop-up
    Then Verify that the licence is displayed on Licence Page

Scenario: User should be able to delete an existing licence
    Given User click on three dots sign near the selected licence
    When User click on delete button 
    And User click on delete device button
    Then Verify that the licence is not displayed on Licence Page

Scenario: User should be able to revoke an existing licence
    Given User click on three dots sign near the selected licence
    When User click on revoke button 
    And User click on revoke licence button
    Then Verify that the licence is displayed as revoked on Licences Page 

Scenario: User should not be able to revoke an existing licence when click on X button
    Given User click on three dots sign near the selected licence
    When User click on revoke button
    And User click on X button on revoke licence pop-up
    Then Verify that the licence is displayed as not revoked on Licence Page
