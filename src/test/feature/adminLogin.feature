@Muhindhar
Feature:Muhindhar_24-08-2026_Login as a admin to the waveinit lms

Feature Description: As a admin user, I want to login to the wave init site with
    valid login credentials

        Background:
            Given user is on the login page of the waveinit lms site
        Scenario Outline: Login to the waveinit lms site with credentials
              And user clicks on the admin role
              And user enters the email "<email>"
              And user enters the password "<password>"
             When user clicks on the signin button
             Then user should receive the "<result>"


        Examples:
                  | email            | password | result  |
                  | admin@test.com   | admin123 | success |
                  | admin@test.com   | wrong123 | fail    |
                  | invalid@test.com | admin123 | fail    |
                  |                  | admin123 | fail    |
                  | admin@test.com   |          | fail    |