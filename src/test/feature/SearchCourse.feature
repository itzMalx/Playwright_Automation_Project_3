@Vetri
@Search
Feature: Vetri_24-08-2026_Search_Courses_Functionality

  Feature Description: As a learner, I want to search the existing courses

  Background:
    Given user is on the login page of the WaveInit LMS site
        And learner clicks on the learner role
        And learner enters the email "titooram123@gmail.com"
        And learner enters the password "sriram123@"
        When learner clicks on the signin button
        Then learner should receive the "success"

  @Test
  @ValidSearch
  Scenario Outline: User search the courses with valid keyword in the WaveInit LMS 
    When the user clicks the Explore Courses button
    And enters "<keyword>" in search field
    Then appropriate course should be shown

    Examples:
      | keyword |
      | Manual Testing |
      | Manual |

  @Test
  Scenario Outline: User search the courses with invalid keyword in the WaveInit LMS
    When the user clicks the Explore Courses button
    And enters "<keyword>" in search field
    Then No match message should be shown

    Examples:
      | keyword |
      | wrong |
      | invalid |
      | error |

    @Debug
    Scenario Outline: User search the course irrespective of cases 
      When the user clicks the Explore Courses button
      And enters "<keyword>" in search field
      Then appropriate course should be shown

      Examples:
          | keyword |
          | MANUAL TESTING |
          | manual testing |
          | MaNuAl TeStIng |

    @Space
    Scenario: User searches for a course using only spaces
      When the user clicks the Explore Courses button
      And the user enters only spaces in the search field
      Then No match message should be shown
    
    @LeadingAndTrailingSpace
    Scenario Outline: User searches for a course using a keyword with leading or trailing spaces
      When the user clicks the Explore Courses button
      And enters keywords with "<space>" in search field
      Then appropriate course should be shown

      Examples:
          | space |
          | leading |
          | trailing |
          | both |

    @SpecialChar
    Scenario Outline: Application should'nt show records if user searches with special characters 
      When the user clicks the Explore Courses button
      And enters "<keyword>" in search field
      Then No match message should be shown

      Examples:
          | keyword |
          | @@@@ |
          | $$$$ |
          | Manual@123 |
          | ***** |
    

    @PartialKeyword
    Scenario Outline: User searches for a course using a partial keyword
      When the user clicks the Explore Courses button
      And enters "<keyword>" in search field
      Then appropriate course should be shown

      Examples:
        | keyword |
        | Manual |
