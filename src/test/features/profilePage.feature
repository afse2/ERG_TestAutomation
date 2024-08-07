
Feature: As a user, I should be able to display profile menu; so that I can change my password and logout

  Background:
    Given User should be able to login


  Scenario: User should be able to display profile menu options
    Given User click on profile menu tab
    Then Verify that the options " Hesabım ", " Çıkış " is displayed on Profile Menu


  Scenario: User should be able to logout when click on logout button
    Given User click on profile menu tab
    When User click on logout button
    Then Verify that the header "YIKA Lite'e Hoşgeldiniz" is displayed when user logout
  
  Scenario: User should not diplayed home page when logout and click on back navigation button
    Given User click on profile menu tab
    When User click on logout button
    And User click on back navigation button
    Then Verify that the homepage is not diplayed

  Scenario: User should not be able to change own password with blank password on Change Password Page
    Given User click on profile menu tab
    When User click on My Account button and land on My Account Page
    And User leave the new password input box as blank
    And User leave the confirm password input box as blank
    And User click on save changes button
    Then Verify that the error toast "Yeni parolalar uyuşmuyor!" is displayed on My Account Page

  Scenario: User should not be able to change own password, if enter two different password on Change Password Page
    Given User click on profile menu tab
    When User click on My Account button and land on My Account Page
    And User enter a password as "Stop123!" into the new password input box
    And User enter a password as "Stop0123!" into the confirm password input box
    And User click on save changes button
    Then Verify that the error toast "Yeni parolalar uyuşmuyor!" is displayed on My Account Page

  Scenario Outline: User should not be able to change own password with invalid passwords
    Given User click on profile menu tab
    When User click on My Account button and land on My Account Page
    And User enter a password as "<password>" into the new password input box
    And User enter a password as "<confirmPassword>" into the confirm password input box
    And User click on save changes button
    Then Verify that the error toast "Parola en az 8 haneli olmalıdır ve en az bir büyük ve bir küçük harf ve rakam içermelidir!" is displayed on My Account Page

    Examples:
      | password   | confirmPassword |
      | startstart | startstart      |
      | STARTSTART | STARTSTART      |
      | 12345678   | 12345678        |
      | !@#%&*?:   | !@#%&*?:        |
      | start123!  | start123!       |
@smoke
Scenario: User should be able to change own password on Change Password Page
    Given User click on profile menu tab
    When User click on My Account button and land on My Account Page
    And User enter a password as "Stop123!" into the new password input box
    And User enter a password as "Stop123!" into the confirm password input box
    And User click on save changes button
    Then Verify that the success toast "Parolanız güncellendi!" is displayed on My Account Page
    And User enter a password as "Start123!" into the new password input box
    And User enter a password as "Start123!" into the confirm password input box
    And User click on save changes button
    Then Verify that the success toast "Parolanız güncellendi!" is displayed on My Account Page

  