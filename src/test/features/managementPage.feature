@YR-2244 
Feature: As a user, I should be able to display Management Page; so that I can reach all management items

  Background:
    Given User should be able to login

  @YR-2232
  Scenario: User should be able to display navbar options on Management Page
    Then Verify that all items "Markalar", "Raporlar", "Cihazlar", "Lisanslar", "Kullanıcılar", "Veriler" is diplayed on navbar

  @YR-2233 
  Scenario: User should be able to navigate Markalar Page when click on Markalar button on navbar
    Then Verify that the button " Marka Ekle " is displayed on "Markalar" Page

  @YR-2234
  Scenario: User should be able to navigate Raporlar Page when click on Raporlar button on navbar
    When User click on "Raporlar" button
    Then Verify that the header "Tesis Raporu" is displayed on "Raporlar" Page

  @YR-2235
  Scenario: User should be able to navigate Cihazlar Page when click on Cihazlar button on navbar
    When User click on "Cihazlar" button
    Then Verify that the button " Cihaz Ekle " is displayed on "Cihazlar" Page

  @YR-2236
  Scenario: User should be able to navigate Lisanslar Page when click on Lisanslar button on navbar
    When User click on "Lisanslar" button
    Then Verify that the button " Lisans Ekle " is displayed on "Lisanslar" Page

  @YR-2237
  Scenario: User should be able to navigate Kullanicilar Page when click on Kullanicilar button on navbar
    When User click on "Kullanıcılar" button
    Then Verify that the button " Kullanıcı Ekle " is displayed on "Kullanıcılar" Page

  @YR-2238
  Scenario: User should be able to navigate Veriler Page when click on Veriler button on navbar
    When User click on "Veriler" button
    Then Verify that the column name "Tarih" is displayed on "Veriler" Page
