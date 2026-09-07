@Malavicka
Feature: Malavicka_24-08-2026_Login as a learner to the waveinit lms

Feature Description: As a learner user, I want to login to the wave init site with
    valid and invalid login credentials

    Background:
        Given learner is on the login page of the waveinit lms site

    @login
    Scenario Outline: Login to the waveinit lms site as a learner with credentials
        And learner clicks on the learner role
        And learner enters the email "<email>"
        And learner enters the password "<password>"
        When learner clicks on the signin button
        Then learner should receive the "<result>"

    Examples:
        | email                    | password   | result  |
        | titooram123@gmail.com    | sriram123@ | success |
        | titooram123@gmail.com    | wrong123   | fail    |
        | invalid@test.com         | sriram123@ | fail    |
        |                          | sriram123@ | fail    |
        | titooram123@gmail.com    |            | fail    |