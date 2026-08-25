@Updating
Feature: Muhindhar_25-08-2026_Forgot Password

Feature Description: As a user, I want to reset my password using
    the verification code received through email

        Background:
            Given user is on the login page of the waveinit lms site


        Scenario Outline: Reset password using verification code
             When user clicks on the forgot password link
              And user enters the registered email "<email>"
              And user clicks on the send verification code button
              And user retrieves the verification code from the email
              And user enters the verification code
              And user clicks on the verify and continue button
              And user enters the new password "<newPassword>"
              And user confirms the new password "<confirmPassword>"
              And user clicks on the reset password button
             Then user should receive the password reset "<result>"

        Examples:
                  | email                            | newPassword | confirmPassword | result  |
                  | muhindhar@tyalwmo1.mailosaur.net | Admin@123   | Admin@123       | success |

        Scenario Outline: Reset password with invalid email
             When user clicks on the forgot password link
              And user enters the registered email "<email>"
              And user clicks on the send verification code button
             Then user should remain on the forgot password page

        Examples:
                  | email                                |
                  | wrong@tyalwmo1.mailosaur.net         |
                  | unknown@tyalwmo1.mailosaur.net       |
                  | testuser@tyalwmo1.mailosaur.net      |
                  | notregistered@tyalwmo1.mailosaur.net |