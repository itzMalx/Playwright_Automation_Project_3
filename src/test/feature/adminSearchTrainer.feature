@Myl @searchTrainer
Feature: Search Trainer

    Background:
        Given user is on the login page of the waveinit lms site
        And user clicks on the admin role
        And user enters the email "admin@test.com"
        And user enters the password "admin123"
        And user clicks on the signin button
        And clicks on the Trainer side pannel button


    @valid
    Scenario Outline: Search trainer using exact and partial trainer name
        When the admin enters "<trainerName>" in the trainer search field
        Then the trainer should be displayed the searched "<trainerName>"

        Examples:
            | trainerName |
            | Mugan       |
            | John        |