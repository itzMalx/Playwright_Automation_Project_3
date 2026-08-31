@Malavicka @sortCourses
Feature: Malavicka_28.08.2026_Sort courses in My Courses

    Background:
        Given user is on the login page of the WaveInit LMS site
        And learner clicks on the learner role
        And learner enters the email "titooram123@gmail.com"
        And learner enters the password "sriram123@"
        And learner clicks on the signin button
        And learner clicks on my course button

    @sortNewest
    Scenario: Verify courses can be sorted by Newest
        When the learner selects "Sort by: Newest"
        Then the courses should be displayed in newest order

    @sortOldest
    Scenario: Verify courses can be sorted by Oldest
        When the learner selects "Sort by: Oldest"
        Then the courses should be displayed in oldest order

    @sortTitle
    Scenario: Verify courses can be sorted by Title
        When the learner selects "Sort by: Title"
        Then the courses should be displayed in alphabetical order