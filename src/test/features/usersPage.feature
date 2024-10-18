Feature: As a user, I should be able to display Users Page, sort and filter all users

  Background:
    Given User should be able to login
    When User click on Kullanicilar tab on navbar

  @smoke
  Scenario: User should be able to create a user with valid mail on Users Page
    Given User click on add users button
    When User enter mail into mail inputbox as "test@test.com"
    And User select "Tesis Yöneticisi" option from role dropdown
    And User select "Test" option from facility dropdown
    And User select "Aktif" option from status dropdown on Create User pop-up
    And User click on add button on Create Users pop-up
    Then Verify that the created user is displayed on Users Page

  Scenario: User should not be able to create a user with invalid mail on Users Page
    Given User click on add users button
    When User enter mail into mail inputbox as "test@test"
    And User select "Tesis Yöneticisi" option from role dropdown
    And User select "Test" option from facility dropdown
    And User select "Aktif" option from status dropdown on Create User pop-up
    And User click on add button on Create Licence pop-up
    Then Verify that the error toast "body must match pattern \"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"" is displayed on Users Page

  Scenario: User should not be able to create a user without facility on Users Page
    Given User click on add users button
    When User enter mail into mail inputbox as "test@test.com"
    And User select "Tesis Yöneticisi" option from role dropdown
    And User select "Test" option from facility dropdown
    And User select "Aktif" option from status dropdown on Create User pop-up
    And User click on add button on Create Users pop-up
    Then Verify that the error toast "Bu role sahip bir kullanıcının en az bir marka ya da tesisi olmalıdır" is displayed on Users Page

  Scenario: User should not be able to create a user with existing mail on Users Page
    Given User click on add users button
    When User enter mail into mail inputbox as "test@test.com"
    And User select "Tesis Yöneticisi" option from role dropdown
    And User select "Test" option from facility dropdown
    And User select "Aktif" option from status dropdown on Create User pop-up
    And User click on add button on Create Users pop-up
    Then Verify that the error toast "Kullanıcı zaten var" is displayed on Users Page

  Scenario: User should not be able to create a user when click on X button
    Given User click on add users button
    When User enter mail into mail inputbox as "test1@test.com"
    And User select "Tesis Yöneticisi" option from role dropdown
    And User select "Test" option from facility dropdown
    And User select "Aktif" option from status dropdown on Create User pop-up
    And User click on X button on Create Users pop-up
    Then Verify that the user with "test1@test.com" mail is not displayed on Users Page

  Scenario: User should be able to display edit option when click on three dots sign near the users
    Given User click on three dots sign near the selected user "test@test.com"
    Then Verify that the edit options "Düzenle", "Parola sıfırla", "Sil" are displayed on Users Page

  Scenario: User should be able to search a user with valid value
    Given User enter a value as "erg" into search input box
    Then Verify that the searched users are displayed on Users Page

  Scenario: User should not be able to search a user with invalid value
    Given User enter a value as "asd" into search input box
    Then Verify that the No Data message is displayed on Users Page

  Scenario: User should be able to filter users by brands name
    Given User select "ofis test" option from brands dropdown
    Then Verify that the selected brand's users are displayed on Users Page

  Scenario: User should be able to reset brands filter when click on x button
    Given User select "ofis test" option from brands dropdown
    When User click on x button
    Then Verify that the all brands users are displayed on Users Page

  Scenario: User should be able to filter users by facility name
    Given User select "test1" option from facilities dropdown
    Then Verify that the selected facility's users are displayed on Users Page

  Scenario: User should be able to reset facility filter when click on x button
    Given User select "test1" option from facilities dropdown
    When User click on x button
    Then Verify that the all facilities users are displayed on Users Page

  Scenario: User should be able to display selected brand's facilities on facilities dropdown
    Given User select "ofis test" option from brands dropdown
    Then Verify that the all facilities belonging to the brand are displayed under the facilities drop-down menu

  Scenario: User should be able to filter users by status
    Given User select "Bloke" option from status type dropdown
    Then Verify that the selected status type are displayed on Users Page

  Scenario: User should be able to reset status type filter when click on x button
    Given User select "Bloke" option from status type dropdown
    When User click on x button
    Then Verify that the all status type are displayed on Users Page

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

  Scenario: User should be able to search status type name when enter valid value on status type filter tab
    Given User enter a value on status type filter as "ga"
    Then Verify that the status type name contain the value are displayed on status type filter tab

  Scenario: User should not be able to search status type name when enter invalid value on status type filter tab
    Given User enter a value on status type filter as "asdf"
    Then Verify that the error message " Veri yok " is displayed on status type filter tab

  Scenario: User should be able to navigate desired page on Users Page
    Given User click on "2" pagination section on Users Page
    Then Verify that the "2" page users are displayed

  Scenario: User should be able to navigate next page when click on > button
    Given User click on > button on Users Page
    Then Verify that the next page is displayed

  Scenario: User should be able to navigate previous page when click on < button
    Given User click on "2" pagination section on Users Page
    When User click on < button on Users Page
    Then Verify that the previous page is displayed

  Scenario: User should not be able to navigate previous page when land on the first page
    Given User click on 1 button on pagination section
    Then Verify that the < button is not enable

  Scenario: User should not be able to navigate next page when land on the last page
    Given User click on last page button on pagination section
    Then Verify that the > button is not enable

  Scenario: User should be able to navigate first page when change Brands filter
    Given User click on last page button on pagination section
    When User select "ofis test" option from brands dropdown
    Then Verify that first page is displayed on Users Page

  Scenario: User should be able to navigate first page when change Facility filter
    Given User click on last page button on pagination section
    When User select "Maslak" option from facilities dropdown
    Then Verify that first page is displayed on Users Page

  Scenario: User should be able to navigate first page when change status type filter
    Given User click on last page button on pagination section
    When User select "Aktif" option from status type dropdown
    Then Verify that first page is displayed on Users Page

  Scenario: User should be able to reset user's password
    Given User click on three dots sign near the selected user "ergtester1@gmail.com"
    When User click on reset password button
    And User click on reset button
    Then Verify that the success message "parola basariyla sifirlandi" and password renewed pop-up are displayed on Users Page

  Scenario: User should be able to edit an existing user
    Given User click on three dots sign near the selected user "test@test.com"
    When User click on edit button
    And User select a role as "Marka Yoneticisi"
    And User select a brand as "Macro Center"
    And User select a status as "Pasif"
    And User click on save button
    Then Verify that the created user is displayed on Users Page

  Scenario: User should not be able to edit an existing user with blank brand
    Given User click on three dots sign near the selected user "test@test.com"
    When User click on edit button
    And User click on X button near the facility option
    And User click on save button
    Then Verify that the error toast "Bu role sahip bir kullanıcının en az bir marka ya da tesisi olmalıdır" is displayed on Users Page

  Scenario: User should not be able to edit an existing user when click on X button
    Given User click on three dots sign near the selected user "test@test.com"
    When User click on edit button
    And User select a brand as "Macro Center"
    And User click on X button on edit user pop-up
    Then Verify that the edit user's brand is not displayed as "Macro Center"

  Scenario: User should not be able to delete an existing user when click on X button
    Given User click on three dots sign near the selected user "test@test.com"
    When User click on delete button
    And User click on X button on delete device pop-up
    Then Verify that the user with "test1@test.com" mail is not displayed on Users Page

  Scenario: User should be able to delete an existing user
    Given User click on three dots sign near the selected user "test@test.com"
    When User click on delete button
    And User click on delete user button
    Then Verify that the user with "test1@test.com" mail is not displayed on Users Page
