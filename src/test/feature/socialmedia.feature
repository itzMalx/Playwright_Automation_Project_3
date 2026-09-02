@Vetri
Feature: Vetri_02-09-2026_Login as a learner to the waveinit lms

Feature Description: As a learner user, I want to login to the wave init site with
    valid and invalid login credentials

    Background:
        Given learner is on the login page of the waveinit lms site
        And learner clicks on the learner role
        And learner enters the email "tester@gmail.com"
        And learner enters the password "Tester@123"
        When learner clicks on the signin button
        And the learner navigates to the profile page
        And the learner clicks the social media link edit button
        And the learner sets the following social media links:
            | Platform  | Link                  |
            | Instagram | https://www.instagram.com/     |
            | Twitter   | https://x.com/              |
            | GitHub    | https://github.com/        |
            | Portfolio | https://www.wix.com/website/templates/html/portfolio-cv/portfolios     |
            | LinkedIn | https://www.linkedin.com/ |
        And the learner clicks the Save button

    @SocialMedia
    Scenario Outline: Application should navigate to the appropriate site when the learner clicks the link
        When the learner clicks the "<link>" link
        Then the learner should be navigated to the "<expectedUrl>" site

        Examples:
            | link      | expectedUrl |
            | Instagram | instagram\.com |
            | Twitter   | x\.com |
            | GitHub    | github\.com |
            | Portfolio | wix\.com/website/templates/html/portfolio-cv/portfolios       |
            | LinkedIn  | linkedin\.com                                                 |




