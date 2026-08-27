@Shobana
Feature: Shobana_24-08-2026_Login as a trainer to the WaveInit LMS

Feature Description: As a trainer user, I want to login to the WaveInit LMS
    with valid login credentials

    Background:
        Given user is on the login page of the WaveInit LMS site

    Scenario Outline: Login to the WaveInit LMS site as a trainer with credentials
        And user clicks on the trainer role
        And trainer enters the email "<email>"
        And trainer enters the password "<password>"
        When trainer clicks on the signin button
        Then trainer should receive the "<result>"

    Examples:
        | email                | password   | result  |
        | riya@gmail.com       | riya1234   | success |
        | trainer@test.com     | wrong123   | fail    |
        | invalid@test.com     | trainer123 | fail    |
        |                      | trainer123 | fail    |
        | trainer@test.com     |            | fail    |