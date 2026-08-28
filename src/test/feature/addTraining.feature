@Muhindhar
Feature: Muhindhar_27-08-2026_Add training module

Feature Description: As a admin i want to create the training session

        Background:
            Given admin user is logged in


        Scenario: As a admin, I want to create the training session
             When user clicks the add training button
              And user enters the credentials
              And user clicks the create training session button
             Then training session will be created


        Scenario Outline: Create training session with invalid title
             When user clicks the add training button
              And user enters training details "<title>" "<description>" "<startDateTime>" "<endDateTime>" "<capacity>"
              And user clicks the create training session button
             Then training session should not be created

        Examples:
                  | title | description                  | startDateTime    | endDateTime      | capacity |
                  |       | Playwright automation course | 2026-08-28T10:00 | 2026-08-28T12:00 | 30       |


        Scenario Outline: Create training session with invalid description
             When user clicks the add training button
              And user enters training details "<title>" "<description>" "<startDateTime>" "<endDateTime>" "<capacity>"
              And user clicks the create training session button
             Then training session should not be created

        Examples:
                  | title              | description | startDateTime    | endDateTime      | capacity |
                  | Playwright Testing |             | 2026-08-28T10:00 | 2026-08-28T12:00 | 30       |


        Scenario Outline: Create training session with invalid date range
             When user clicks the add training button
              And user enters training details "<title>" "<description>" "<startDateTime>" "<endDateTime>" "<capacity>"
              And user clicks the create training session button
             Then training session should not be created

        Examples:
                  | title              | description                  | startDateTime    | endDateTime      | capacity |
                  | Playwright Testing | Playwright automation course | 2026-08-28T14:00 | 2026-08-28T12:00 | 30       |


        Scenario Outline: Create training session with invalid capacity
             When user clicks the add training button
              And user enters training details "<title>" "<description>" "<startDateTime>" "<endDateTime>" "<capacity>"
              And user clicks the create training session button
             Then training session should not be created

        Examples:
                  | title              | description                  | startDateTime    | endDateTime      | capacity |
                  | Playwright Testing | Playwright automation course | 2026-08-28T10:00 | 2026-08-28T12:00 | 0        |