$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFile/Login1.feature");
formatter.feature({
  "name": "Validate the login functionality with toclick USA.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the Url.",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_launch_the_browser_and_load_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login Functionality with invalid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should click the USA",
  "keyword": "When "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_USA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter invalid username and valid password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "EmpId",
        "Address"
      ]
    },
    {
      "cells": [
        "Dhana",
        "dhana@123",
        "abcd",
        "Chennai"
      ]
    },
    {
      "cells": [
        "Ram",
        "ram@123",
        "xyza",
        "madurai"
      ]
    },
    {
      "cells": [
        "John",
        "john@123",
        "hgjf",
        "Vellore"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_enter_invalid_username_and_valid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_print_the_title_of_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to correct credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_navigate_to_correct_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the Url.",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_launch_the_browser_and_load_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login Functionality with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should click the USA",
  "keyword": "When "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_USA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter valid username and invalid password",
  "rows": [
    {
      "cells": [
        "Apple",
        "Apple@123",
        "Banana",
        "Banana@123"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_enter_valid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_print_the_title_of_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to correct credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_navigate_to_correct_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login functionality with invalid Username and invalid Password.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should click the USA",
  "keyword": "When "
});
formatter.step({
  "name": "User should enter invalid username \"\u003cUsername\u003e\" and invalid password\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the title of login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should navigate to correct credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Divya",
        "divya@123"
      ]
    },
    {
      "cells": [
        "Gandhi",
        "gandhi@123"
      ]
    },
    {
      "cells": [
        "Vignesh",
        "vignesh@123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the Url.",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_launch_the_browser_and_load_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login functionality with invalid Username and invalid Password.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should click the USA",
  "keyword": "When "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_USA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter invalid username \"Divya\" and invalid password\"divya@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_enter_invalid_username_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_print_the_title_of_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to correct credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_navigate_to_correct_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the Url.",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_launch_the_browser_and_load_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login functionality with invalid Username and invalid Password.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should click the USA",
  "keyword": "When "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_USA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter invalid username \"Gandhi\" and invalid password\"gandhi@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_enter_invalid_username_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_print_the_title_of_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to correct credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_navigate_to_correct_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the Url.",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_launch_the_browser_and_load_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login functionality with invalid Username and invalid Password.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should click the USA",
  "keyword": "When "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_USA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter invalid username \"Vignesh\" and invalid password\"vignesh@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_enter_invalid_username_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_print_the_title_of_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to correct credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginbtnStepdefinition.user_should_navigate_to_correct_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFile/Searchproduct.feature");
formatter.feature({
  "name": "Validate the login functionality of online purchase.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regresstion"
    }
  ]
});
formatter.scenario({
  "name": "Validate the login functionality with toclick USA.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regresstion"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser and load the Url.",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_launch_the_browser_and_load_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the USA.",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_click_the_USA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search a particular product.",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_search_a_particular_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of your page.",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_print_the_title_of_your_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the click search button.",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_click_the_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to correct credential page.",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdefinition.user_should_navigate_to_correct_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});