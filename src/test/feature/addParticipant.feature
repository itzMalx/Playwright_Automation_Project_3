@Muhindhar
Feature: Muhindhar_28-08-2026_Add participant by admin feature

Feature Description : As a admin, I want to add the participant with valid and invalid details

        Background:
            Given admin user is logged in

        Scenario Outline: Add participant by admin
              And user clicks on the participants tab
              And user clicks on the add participant button
              And user enters participant details "<testCase>"
             When user clicks the submit add participant button
             Then participant operation should be completed "<testCase>"

        Examples:
                  | testCase |
                  | TC001    |
                  | TC002    |
                  | TC003    |
                  | TC004    |
                  | TC005    |
                  | TC006    |
