@Sanity

Feature: Validate the login functionality with toclick USA.

  Background: 
    Given User should launch the browser and load the Url.

  Scenario: Validate the login Functionality with invalid username and valid password
    When User should click the USA
    And User should enter invalid username and valid password
      #2D Map
      | Username | Password  | EmpId | Address |
      | Dhana    | dhana@123 | abcd  | Chennai |
      | Ram      | ram@123   | xyza  | madurai |
      | John     | john@123  | hgjf  | Vellore |
    And User should click the login button
    And User should print the title of login button
    Then User should navigate to correct credential page

  Scenario: Validate the login Functionality with valid username and invalid password
    When User should click the USA
    And User should enter valid username and invalid password
      #1D List
      | Apple | Apple@123 | Banana | Banana@123 |
    And User should click the login button
    And User should print the title of login button
    Then User should navigate to correct credential page

  Scenario Outline: Validate the login functionality with invalid Username and invalid Password.
    When User should click the USA
    And User should enter invalid username "<Username>" and invalid password"<Password>"
    And User should click the login button
    And User should print the title of login button
    Then User should navigate to correct credential page

    Examples: 
      | Username | Password    |
      | Divya    | divya@123   |
      | Gandhi   | gandhi@123  |
      | Vignesh  | vignesh@123 |
