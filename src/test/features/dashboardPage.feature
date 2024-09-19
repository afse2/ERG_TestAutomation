Feature: As a user, I should be able to display brand's Dashboard, sidebar options

  Background:
    Given User should be able to login
    When User select a brand from brand table

  Scenario: User should be able to display brand's dashboard
    Then Verify that the brand name is displayed on Dashboard Page

  Scenario: User should be able to display all filter as "all" by default
    Then Verify that the all filters are displayed as "all" by default

  Scenario: User should be able to display "Hand hygiene moments" and "Hand hygiene activities" on Dashboard Page
    Then Verify that "Hand hygiene moments" and "Hand hygiene activities" are displayed on Dashboard Page

  Scenario: User should be able to display all facilities belonging the selected brand under facilities filter
    Given User click on facilities filter
    Then Verify that all facilities belonging the selected brand are displayed

  Scenario: User should be able to filter result by facility name
    Given User select "Kanyon" from facilities dropdown
    Then Verify that the selected facility's result are displayed on Dashboard Page

  Scenario: User should be able to reset facility filter when click on x button
    Given User select "Kanyon" from facilities dropdown
    When User click on x button
    Then Verify that all facilities result are displayed on Dashboard Page

  Scenario: User should be able to filter result by shift
    Given User select "Vardiya1" from shift dropdown
    Then Verify that the selected shift's result are displayed on Dashboard Page

  Scenario: User should be able to reset shift filter when click on x button
    Given User select "Vardiya1" from shift dropdown
    When User click on x button
    Then Verify that all shift result are displayed on Dashboard Page

  Scenario Outline: User should be able to filter result by date period
    Given User select "<date>" option from date dropdown
    Then Verify that the selected date period's result are displayed on Dashboard Page

    Examples:
      | date        |
      | Bugün       |
      | Bu Hafta    |
      | Geçen Hafta |
      | Bu Ay       |
      | Bu Yıl      |

  Scenario: User should be able to filter result by custom date range
    Given User select custom date range from date dropdown
    Then Verify that the selected date range's result are displayed on Dashboard Page
