@Vetri
Feature: Vetri_24-08-2026_Search_Courses_Functionality

  Feature Description: As a trainer user, I want to search the existing courses

  Background:
    Given user is on the login page of the WaveInit LMS site
        And learner clicks on the learner role
        And learner enters the email "titooram123@gmail.com"
        And learner enters the password "sriram123@"
        When learner clicks on the signin button
        Then learner should receive the "success"

  @Test
  Scenario Outline: Search the courses with keyword in the WaveInit LMS
    And clicks Explore courses button
    And enters "<keyword>" in search field
    Then appropriate course should be shown

    Examples:
      | keyword |
      | Manual Testing |
      | vcjasn |

  @Test
  Scenario Outline: Search the courses with invalid in the WaveInit LMS
    And clicks Explore courses button
    And enters "<keyword>" in search field
    Then No match message should be shown

    Examples:
      | keyword |
      | wrong |
      | invalid |
      | error |

    
