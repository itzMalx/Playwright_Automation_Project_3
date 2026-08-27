@Shobana
Feature: Shobana_25-08-2026_Edit Trainer Profile

Feature Description:
    As a trainer, I want to edit and manage my profile information
    so that my personal and professional details remain up to date.

Background:
    Given trainer is logged in to the WaveInit LMS site
    And trainer navigates to the My Profile page
    And trainer clicks on the Edit Profile button

Scenario: Update trainer profile with valid details
    When trainer updates the professional headline with "Automation Test Engineer"
    And trainer updates the about bio with "Experienced in automation testing using Playwright"
    And trainer clicks on the Save Changes button
    Then the trainer profile should be updated successfully

Scenario: Update trainer full name successfully
    When trainer updates the full name with "Riya Tester"
    And trainer clicks on the Save Changes button
    Then the updated full name "Riya Tester" should be displayed in the profile

Scenario: Cancel the profile changes
    When trainer updates the professional headline with "Temporary Profile Update"
    And trainer clicks on the Cancel button
    Then the profile changes should not be saved