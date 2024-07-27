Feature: As a user, I should be able to login; so that I can land on homepage

    
    Background: 
        Given User is on the login page

    Scenario: User should be able to login with valid email and password
        Given User enter a valid email as "ergtester1@gmail.com" into the email input box
        When User enter a valid password as "Start123!" into the password input box
        And User click on login button
        Then Verify that the header "Markalar " is displayed when user is on the home page

    Scenario: User should not be able to login with invalid email and password
        Given User enter a invalid email as "ergtester1@gmail.com1" into the email input box
        When User enter a valid password as "Start123!" into the password input box
        And User click on login button
        Then Verify that the error toast "Geçersiz kimlik" is displayed on Login page
        When User enter a valid email as "ergtester1@gmail.com" into the email input box
        And User enter a invalid password as "Stop123!" into the password input box
        Then Verify that the error toast "Geçersiz kimlik" is displayed on Login page

    Scenario: User should not be able to login with blank email
        Given User leave the username input box as blank
        When User enter a valid password as "Start123!" into the password input box
        And User click on login button
        Then Verify that the error toast "body must match format \"email\"" is displayed on Login page
       
    Scenario: User should not be able to login with blank password   
        Given User enter a valid email as "ergtester1@gmail.com" into the email input box
        When User leave the password input box as blank
        And User click on login button
        Then Verify that the error toast "body must NOT have fewer than 3 characters" is displayed on Login page

    Scenario: User should be able to display pop-up when click forgot password link
        Given User click on forgot password link
        Then Verify that the forgot password pop-up "Parola kurtarma" is displayed on Login Page

    Scenario: User should be able to display Remember Me checkbox in Login Page and it is clickable
        Then Verify that the checkbox "Beni Hatırla" is displayed on Login Page
        When User click on checkbox
        Then Verify that the checkbox is checked
        When User click on checkbox
        Then Verify that the checkbox is unchecked

    Scenario: User should be able to display password in bullet sign by default
        Given User enter a valid password as "Start123!" into the password input box
        Then Verify that the password is displayed in bullet sign

    Scenario: User should be able to display the email receive message after clicking forgot password link then providing an email
        Given User click on forgot password link
        When User enter a valid email as "ergtester1@gmail.com" into the email input box on password recovery pop-up
        And User click on send password recovery mail button
        Then Verify that the email receive message is displayed on password recovery pop-up

    Scenario: User should be able to display own username in the profile menu after succesfull login
        Given User enter a valid email as "ergtester1@gmail.com" into the email input box
        When User enter a valid password as "Start123!" into the password input box
        And User click on login button
        Then Verify that the username is displayed on profile menu who logged in with email

    Scenario: User should be able to display captcha code after trying to login twice with invalid credentials
        Given User enter a valid email as "ergtester1@gmail.com" into the email input box
        When User enter a invalid password as "Stop123!" into the password input box
        And User click on login button
        And User enter a invalid password as "Stop123!" into the password input box
        And User click on login button
        Then Verify that the captcha code is displayed on Login Page     