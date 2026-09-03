@Muhindhar
Feature: Muhindhar_01-09-2026_Schedule interview to the candidate

Feature Description: As an admin, I want to schedule the interview for the candidate

        Background:
            Given admin user is logged in

        Scenario Outline: Schedule interview to the candidate
              And user clicks on the interview tab
              And user clicks on the schedule interview button
              And user enters interview details "<testCase>"
             When user clicks on the schedule interview
             Then interview operation should be completed "<testCase>"

        Examples:
                  | testCase |
                  | TC001    |
                  | TC002    |
                  | TC003    |
                  | TC004    |
                  | TC005    |