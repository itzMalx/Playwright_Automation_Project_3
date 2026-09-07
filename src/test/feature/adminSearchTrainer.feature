@Myl @searchTrainer
Feature: Myl_2.8.26_Search Trainer

    Background:
        Given user is on the login page of the waveinit lms site
        And user clicks on the admin role
        And user enters the email "admin@test.com"
        And user enters the password "admin123"
        And user clicks on the signin button
        And clicks on the Trainer side pannel button


    @valid
    Scenario Outline: Search trainer using different parameters
        When the admin enters "<data>" in the trainer search field
        Then the searched "<data>" dispalyed under "<parameter>"

        Examples:
            | data           | parameter |
            | Mugan M        | Trainer   |
            | suba@gmail.com | Email     |
            | 7867090837     | Phone     |
            | EMP-1050       | EmpId     |