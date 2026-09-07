@Muhindhar
Feature: Muhindhar_04-09-2026-Admin Module Navigation

Feature Description:
              As an admin, I want to navigate between LMS modules
    so that I can verify each admin module opens correctly.

        Background:
            Given admin user is logged in

        Scenario Outline: Verify admin can navigate to LMS modules
             When admin opens the "<moduleName>" module
             Then admin should see the "<moduleName>" module page

        Examples:
                  | moduleName        |
                  | Dashboard         |
                  | Training Programs |
                  | Participants      |
                  | Trainers          |
                  | Interviews        |