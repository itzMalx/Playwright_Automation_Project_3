@Vetri 
@Signup
Feature: Vetri_25-08-2026_Signup_Learner

    Background:
        Given learner is on the login page of the waveinit lms site
        And user clicks signup as learner

    Scenario: User can able to signup with valid credentials 
        When the user enters credentials      
            | fullName | tester  |
            | email | tester@gmail.com |
            | phone | 9876543210 |
            | password | Tester@123 |
            | confirmPassword | Tester@123 | 
        And the user clicks create account
        Then The user should be redirected to the login page

    Scenario Outline: Application should show warning message when any fields left empty 
        When the user enters credentials 
            | fullName | tester  |
            | email | tester@gmail.com |
            | phone | 9876543210 |
            | password | Tester@123 |
            | confirmPassword | Tester@123 | 
        And "<field>" left empty 
        And the user clicks create account 
        Then the appropriate "Please fill out this field." message should be shown to the user near "<field>"

        Examples:
            | field |
            | fullName |
            | phone |
            | email |
            | password |
            | confirmPassword |


    Scenario: Application should show warning message when terms and condition not checked
        When the user enters credentials
            | fullName       | tester           |
            | email          | tester@gmail.com |
            | phone          | 9876543210       |
            | password       | Tester@123       |
            | confirmPassword | Tester@123      |
        And left the checkbox unchecked
        And the user clicks create account
        Then warning message "You must agree to the terms" should be shown to the user

    
    Scenario: Application should show warning message when password mismatch happends
        When the user enters credentials      
            | fullName | tester  |
            | email | tester@gmail.com |
            | phone | 9876543210 |
            | password | Tester@123 |
            | confirmPassword | Tester@321 | 
        And the user clicks create account
        Then warning message "Passwords do not match" should be shown to the user

    Scenario Outline: Application should show warning message when email is invalid 
        When the user enters credentials 
            | fullName | tester  |
            | email | tester |
            | phone | 9876543210 |
            | password | Tester@123 |
            | confirmPassword | Tester@123 | 
        And the user clicks create account 
        Then the appropriate "Please include an '@' in the email address." message should be shown to the user near "email"

    Scenario Outline: Application should show warning message when password length is less than 6 characters 
        When the user enters credentials 
            | fullName | tester  |
            | email | tester |
            | phone | 9876543210 |
            | password | t@1 |
            | confirmPassword | t@1 | 
        And the user clicks create account 
        Then the appropriate "Please lengthen this text to 6 characters" message should be shown to the user near "password"

    @Bug
    Scenario Outline: Application should show warning message for invalid phone input
        When the user enters credentials
            | fullName        | tester          |
            | email           | tester          |
            | phone           | <phone>         |
            | password        | <password>      |
            | confirmPassword | <password>      |
        And the user clicks create account
        Then the appropriate "<warningMessage>" message should be shown to the user near "phone"

        Examples:
            | phone        | warningMessage                             |
            | 98           | Please lengthen this text to 10 characters |
            | 98kbde7894   | Invalid input                              |
    

