@Vetri
Feature: Vetri_25-08-2026_Signup_Learner

    Background:
        Given learner is on the login page of the waveinit lms site
        And user clicks signup as learner
    
    @Signup
    Scenario Outline: User can able to signup with valid credentials 
        When the user enters credentials      
            | fullName | tester  |
            | email | tester@gmail |
            | phone | 9876543210 |
            | password | Tester@123 |
            | confirmPassword | Tester@123 | 
        And the user clicks create account
        Then The user should be redirected to the login page

    @Signup
    Scenario Outline: Application should show warning message when any fields left empty 
        When the user enters credentials 
            | fullName | tester  |
            | email | tester@gmail |
            | phone | 9876543210 |
            | password | Tester@123 |
            | confirmPassword | Tester@123 | 
        And "<field>" left empty 
        And the user clicks create account 
        Then the appropriate "Please fill out this field." message should be shown to the user

        Examples:
            | field |
            | fullName |
            | phone |
            | email |
            | password |
            | confirmPassword |