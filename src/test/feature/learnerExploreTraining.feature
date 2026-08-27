@Malavicka @learner
Feature: Malavicka_26-08-2026_Learner Join Training

Feature Description: As a learner, I want to explore available trainings
    and join an open training successfully.

    Background:
        Given learner is on the login page of the waveinit lms site
        And learner clicks on the learner role
        And learner enters the email "titooram123@gmail.com"
        And learner enters the password "sriram123@"
        When learner clicks on the signin button
        Then learner should receive the "success"

    Scenario: Verify Explore Courses navigation
        When learner clicks on the Explore Courses button
        Then learner should be navigated to the Explore Trainings page

    Scenario: Verify Open trainings are displayed
        Given learner is on the Explore Trainings page
        When learner clicks on the Open tab
        Then available trainings should be displayed

    Scenario: Verify Join Training button for an open training
        Given learner is on the Explore Trainings page
        When learner clicks on the Open tab
        Then Join Training button should be displayed

    Scenario: Join an open training successfully
        Given learner is on the Explore Trainings page
        When learner clicks on the Open tab
        And learner clicks on the Join Training button
        Then learner should see the "Enrolled successfully." message

    Scenario: Verify joined training after enrollment
        Given learner is on the Explore Trainings page
        When learner clicks on the Joined tab
        Then joined trainings should be displayed