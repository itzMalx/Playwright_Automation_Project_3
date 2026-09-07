@Shobana

Feature: Shobana_01-09-2026_Search Participants

Feature Description:
    As an admin, I want to search for participants
    so that I can quickly find participant records using their name or email address.

Background:
    Given admin is logged in to the WaveInit LMS site
    And admin navigates to the Participants page

Scenario: Search participant using valid participant name
    When admin searches for participant name "Dummy Test"
    Then the matching participant "Dummy Test" should be displayed

Scenario: Search participant using valid participant email
    When admin searches for participant email "dummy.participant@test.com"
    Then the matching participant with email "dummy.participant@test.com" should be displayed

Scenario: Search participant using invalid participant name
    When admin searches for participant name "InvalidParticipant123"
    Then the "No Participants Found" message should be displayed

Scenario: Search participant using invalid participant email
    When admin searches for participant email "invalid@test.com"
    Then the "No Participants Found" message should be displayed

Scenario: Clear participant search successfully
    When admin searches for participant name "Dummy Test"
    And admin clears the participant search field
    Then the participant list should be displayed