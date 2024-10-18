Feature: As a user, I should be able to display, add, edit and delete facilities on Facilities Page

    Background: 
        Given User should be able to login
        When User select a brand from brand table
        And User click on facilities tab on sidebar

    Scenario: User should be able to search facilities by valid value
        Given User enter a valid value as "test"  into search input box
        Then Verify that the facilities name contain the value are displayed on brands filter tab

    Scenario: User should not be able to search facilities by invalid value
        Given User enter a invalid value as "asd"  into search input box
        Then Verify that the error message "Hiç tesis bulunamadı." is displayed on Facilities Page

    Scenario: User should be able to add a facility with at least three characters
        Given User click on add facility button
        When User enter a valid value as "a?a" into facility name
        And User click on add button on create facility pop-up
        Then Verify that the facility with name is displayed on Facilities Page

    Scenario: User should not be able to add a facility with same name as the existing facility
        Given User click on add facility button
        When User enter a valid value as "Test" into facility name
        And User click on add button on create facility pop-up
        Then Verify that the error toast "Tesis halihazırda var" is diplayed on Facilities Page

    Scenario: User should not be able to add a facility with less than two characters
        Given User click on add facility button
        When User enter a valid value as "a?" into facility name
        And User click on add button on create facility pop-up
        Then Verify that the error toast "body must NOT have fewer than 3 characters" is displayed on Facilities Page

    