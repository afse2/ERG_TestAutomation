@smoke
Feature: As as user, I should be able to create, edit and delete brands on Brands Page

  Background:
    Given User should be able to login

    Scenario: User should be able to display "Marka ekle" button and "Markalar" header on Brands Page
        Then Verify that the "Marka ekle" button and "Markalar" header is diplayed on Brands Page

    Scenario: User should be able to create a new brand on Brands Page
        Given User click on "Marka ekle" button
        When User enter brand name as "Test"
        And User click on "Ekle" button
        Then Verify that the brand "Test" is diplayed under the Markalar header

     Scenario: User should not be able to create a new brand with same name as the existing brand
        Given User click on "Marka ekle" button 
        When User enter brand name as "Test"
        And User click on "Ekle" button
        Then Verify that the error toast "Marka halihazırda var" is diplayed on Brands Page

    Scenario: User should not be able to edit a brand with same name as the existing brand on Brands Page
        Given User click on "Marka ekle" button
        When User enter brand name as "Test1"
        And User click on "Ekle" button
        Then Verify that the brand "Test1" is diplayed under the Markalar header
        And User click on pen icon near the "Test1" brand
        When User edit brand name as "Test"
        And User click on "Güncelle" button
        Then Verify that the error toast "Marka halihazırda var" is diplayed on Brands Page


    Scenario: User should be able to edit an existing brand on Brands Page
        Given User click on pen icon near the "Test" brand
        When User edit brand name as "test1"
        And User click status switcher
        And User click on "Güncelle" button
        Then Verify that the "test1" brand in "Pasif" status is displayed on Brands Page

    Scenario: Use should not be able to edit an existing brand when do not click on "Guncelle" button on Brands Page
        Given User click on pen icon near the "Test1" brand
        When User edit brand name as "Test2"
        And User click status switcher
        And User click on outside the pop-up
        Then Verify that the "Test1" brand in "Aktif" status is displayed on Brands Page

    Scenario: Use should not be able to edit an existing brand when click on X button on Brands Page
        Given User click on pen icon near the "Test1" brand
        When User edit brand name as "test2"
        And User click status switcher
        And User click on X button
        Then Verify that the "Test1" brand in "Aktif" status is displayed on Brands Page

    Scenario: User should be able to delete an existing brand
        Given User click on pen icon near the "Test1" brand
        When User click on "Sil" button
        Then Verify that the "Test1" brand is not displayed on Brands Page