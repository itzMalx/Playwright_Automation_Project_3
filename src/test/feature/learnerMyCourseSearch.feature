@Myl @searchMyCourses
Feature: Myl_25.08.2026_Search courses in My Courses

    Background:
        Given user is on the login page of the WaveInit LMS site
        And learner clicks on the learner role
        And learner enters the email "titooram123@gmail.com"
        And learner enters the password "sriram123@"
        And learner clicks on the signin button
        And learner clicks on my course button

    @valid
    Scenario Outline: Search course using exact, partial and case-insensitive course title
        When the user enters "<searchText>" in the course search field
        Then the course "<expectedCourse>" should be displayed

        Examples:
            | searchText | expectedCourse |
            | SDET-1     | SDET-1         |
            | SDET       | SDET-1         |
            | SdeT       | SDET-1         |

    @invalid
    Scenario Outline: Search course using non-existing course title
        When the user enters "<searchText>" in the course search field
        Then no courses should be displayed

        Examples:
            | searchText        |
            | Python Automation |
            | XYZ Course        |
            | @#$%^&            |