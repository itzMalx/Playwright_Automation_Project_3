@Myl @addTrainer
Feature: Myl 27_08_2026 Add Trainer

  Background:
    Given user is on the login page of the waveinit lms site
    And user clicks on the admin role
    And user enters the email "admin@test.com"
    And user enters the password "admin123"
    And user clicks on the signin button

  @valid
  Scenario: Successfully add trainer with mandatory fields
  And clicks on the Trainer side pannel button
    And clicks on the Add trainer button
    When the admin enters a full name
    And the admin enters a email
    And the admin enters a valid password
    And the admin enters the same password in Confirm Password
    And the admin clicks the Create Trainer button
    And a success message should be displayed

  @invalid
  Scenario Outline: Validate Add Trainer with invalid details of mandatory field
    And clicks on the Trainer side pannel button
    And clicks on the Add trainer button
    When the admin enters "<FullName>" in the Full Name field
    And the admin enters "<Email>" in the Email Address field
    And the admin enters "<Password>" in the Password field
    And the admin enters "<ConfirmPassword>" in the Confirm Password field
    And the admin clicks the Create Trainer button
    Then the "<ErrorMsg>" validation message should be displayed for "<Type>"

    Examples:
      | FullName | Email            | Password | ConfirmPassword | Type            | ErrorMsg                    |
      |          | muga@example.com | ucandoit | ucandoit        | name            | Full name is required       |
      | Mugan    |                  | short    | short           | email           | Enter a valid email address |
      | Mugan    | muga@example.com |          | ucandoit        | password        | Password is required        |
      | Mugan    | muga@example.com | ucandoit |                 | confirmpassword | Please confirm the password |