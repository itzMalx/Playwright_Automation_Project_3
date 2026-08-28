@Shobana

Feature: Shobana_28-08-2026_Edit Trainer Social Links

Feature Description:
    As a trainer, I want to edit my social links
    so that my professional profile links remain up to date.

Background:
    Given trainer is logged in to the WaveInit LMS site
    And trainer navigates to the My Profile page

Scenario: Update LinkedIn URL successfully
    When trainer clicks the Edit button for social links
    And trainer updates the LinkedIn URL as "https://www.linkedin.com/in/riya"
    And trainer clicks the Save button for social links
    Then the LinkedIn URL should be updated as "https://www.linkedin.com/in/riya"

Scenario: Update GitHub URL successfully
    When trainer clicks the Edit button for social links
    And trainer updates the GitHub URL as "https://github.com/riya"
    And trainer clicks the Save button for social links
    Then the GitHub URL should be updated as "https://github.com/riya"

Scenario: Update Twitter URL successfully
    When trainer clicks the Edit button for social links
    And trainer updates the Twitter URL as "https://twitter.com/riya"
    And trainer clicks the Save button for social links
    Then the Twitter URL should be updated as "https://twitter.com/riya"

Scenario: Update Portfolio Website successfully
    When trainer clicks the Edit button for social links
    And trainer updates the Portfolio URL as "https://riya.com"
    And trainer clicks the Save button for social links
    Then the Portfolio URL should be updated as "https://riya.com"

Scenario: Update Personal Website successfully
    When trainer clicks the Edit button for social links
    And trainer updates the Personal Website URL as "https://riyawebsite.com"
    And trainer clicks the Save button for social links
    Then the Personal Website URL should be updated as "https://riyawebsite.com"