@LoginValidation
Feature: WaveInit LMS Login Functionality & Field Validations

  As a user of WaveInit LMS
  I want to test the login functionality with valid and invalid inputs
  So that authentication security and UI validation rules are correctly enforced

  Background:
    Given user navigates to the LMS login page

  @ValidLogin
  Scenario: Successful Login with Valid Admin Credentials
    When user selects the "Admin" role
    And user inputs email "admin@test.com" and password "admin123"
    And user clicks the submit button
    Then user should see the dashboard welcome page

  @InvalidPassword
  Scenario: Failed Login with Invalid Password
    When user selects the "Admin" role
    And user inputs email "admin@test.com" and password "wrongPassword123"
    And user clicks the submit button
    Then user should see the "Invalid email or password" error toast message

  @InvalidEmailFormat
  Scenario: Failed Login with Invalid Email Format
    When user selects the "Admin" role
    And user inputs email "invalid-email-format" and password "admin123"
    And user clicks the submit button
    Then email input field should trigger validation error

  @EmptyEmail
  Scenario: Failed Login with Blank Email Field
    When user selects the "Admin" role
    And user inputs email "" and password "admin123"
    And user clicks the submit button
    Then email input field should show required validation message

  @EmptyPassword
  Scenario: Failed Login with Blank Password Field
    When user selects the "Admin" role
    And user inputs email "admin@test.com" and password ""
    And user clicks the submit button
    Then password input field should show required validation message
