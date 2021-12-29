$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccountNonTaxState.feature");
formatter.feature({
  "line": 2,
  "name": "Create Account Non-Tax State by Zip Code",
  "description": "",
  "id": "create-account-non-tax-state-by-zip-code",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User can create a new teacher account in non-taxable state using Zip Code",
  "description": "",
  "id": "create-account-non-tax-state-by-zip-code;user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Get Started and Create An Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Teacher account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click NEXT",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Mr.\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027\u003cfirstName\u003e\u0027 in First Name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027\u003clastName\u003e\u0027 in Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027\u003cemail\u003e\u0027 in Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type \u0027\u003cpassword\u003e\u0027 in Password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I check on Terms of Use CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type \u0027\u003czipCode\u003e\u0027 in Zip Code",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click SEARCH",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I choosing \u0027Adak School\u0027 School",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select \u0027Teacher by Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \u00271st Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I type \u0027\u003cstudentNumber\u003e\u0027 number of students",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \u0027NA\u0027 on Preferred Reading Level",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click Continue to Site Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Profile",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify there is a CLASS CODE present on Home-Page and MyAccount-Page, the code is the same",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify same teacher name is present on My Accounts",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify same school address is present as selected while creating the account",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "create-account-non-tax-state-by-zip-code;user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "zipCode",
        "studentNumber"
      ],
      "line": 33,
      "id": "create-account-non-tax-state-by-zip-code;user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code;;1"
    },
    {
      "cells": [
        "Hello",
        "World",
        "6test2022-nonTaxState@schlastic.com",
        "hello123",
        "99518",
        "5"
      ],
      "line": 34,
      "id": "create-account-non-tax-state-by-zip-code;user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "User can create a new teacher account in non-taxable state using Zip Code",
  "description": "",
  "id": "create-account-non-tax-state-by-zip-code;user-can-create-a-new-teacher-account-in-non-taxable-state-using-zip-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Get Started and Create An Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Teacher account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click NEXT",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Mr.\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027Hello\u0027 in First Name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027World\u0027 in Last Name",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u00276test2022-nonTaxState@schlastic.com\u0027 in Email Address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type \u0027hello123\u0027 in Password",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I check on Terms of Use CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type \u002799518\u0027 in Zip Code",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click SEARCH",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I choosing \u0027Adak School\u0027 School",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select \u0027Teacher by Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \u00271st Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I type \u00275\u0027 number of students",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \u0027NA\u0027 on Preferred Reading Level",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click Continue to Site Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Profile",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify there is a CLASS CODE present on Home-Page and MyAccount-Page, the code is the same",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify same teacher name is present on My Accounts",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify same school address is present as selected while creating the account",
  "keyword": "And "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 5907415600,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickCreateAnAccount()"
});
formatter.result({
  "duration": 269037300,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickTeacherAccount()"
});
formatter.result({
  "duration": 140252100,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickNextButton()"
});
formatter.result({
  "duration": 2252905000,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.titleSelectDropDown()"
});
formatter.result({
  "duration": 2272284500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setFirstName(String)"
});
formatter.result({
  "duration": 114227700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "World",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setLastName(String)"
});
formatter.result({
  "duration": 126372200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6test2022-nonTaxState@schlastic.com",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setEmailAddress(String)"
});
formatter.result({
  "duration": 260595100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello123",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setPasswordField(String)"
});
formatter.result({
  "duration": 131177900,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.checkOnTermsOfUseCheckBox()"
});
formatter.result({
  "duration": 111737600,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2107254400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99518",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setZipCode(String)"
});
formatter.result({
  "duration": 83476600,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickSearchBox()"
});
formatter.result({
  "duration": 2121373200,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickAdakSchool()"
});
formatter.result({
  "duration": 4284288200,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2148629200,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectRoleDropdown()"
});
formatter.result({
  "duration": 2383618000,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectGradeDropdown()"
});
formatter.result({
  "duration": 2388543000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setNumberOfStudents(String)"
});
formatter.result({
  "duration": 1095445700,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2154224200,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectTypeDropdown()"
});
formatter.result({
  "duration": 2308639700,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickContinueToSiteButton()"
});
formatter.result({
  "duration": 6247301800,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickMyAccountDropdown()"
});
formatter.result({
  "duration": 1200754100,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickProfileDropdown()"
});
formatter.result({
  "duration": 2153116000,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyCodeIsSame()"
});
formatter.result({
  "duration": 80849300,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyNamesFromHomepageAndProfile()"
});
formatter.result({
  "duration": 67231700,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyAddressIsSame()"
});
formatter.result({
  "duration": 92480100,
  "status": "passed"
});
formatter.after({
  "duration": 107793700,
  "status": "passed"
});
formatter.uri("CreateAccountStateSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Create Account State Search",
  "description": "",
  "id": "create-account-state-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User can create a new teacher account in taxable state using School Search",
  "description": "",
  "id": "create-account-state-search;user-can-create-a-new-teacher-account-in-taxable-state-using-school-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Get Started and Create An Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Teacher account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click NEXT",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Mr.\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027\u003cfirstName\u003e\u0027 in First Name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027\u003clastName\u003e\u0027 in Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027\u003cemail\u003e\u0027 in Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type \u0027\u003cpassword\u003e\u0027 in Password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I check on Terms of Use CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \u0027New York\u0027 from State Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select \u0027\u003ccity\u003e\u0027 from City Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click SEARCH Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I type \u0027\u003cschoolName\u003e\u0027 in School name",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I choosing \u0027Scholastic Book Club\u0027 School",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \u0027Teacher by Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \u00271st Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I type \u0027\u003cstudentNumber\u003e\u0027 number of students",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \u0027NA\u0027 on Preferred Reading Level",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click Continue to Site Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Profile",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify there is a CLASS CODE present on Home-Page and MyAccount-Page, the code is the same",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify same teacher name is present on My Accounts",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify same school address is present as selected while creating the account",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "create-account-state-search;user-can-create-a-new-teacher-account-in-taxable-state-using-school-search;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "city",
        "schoolName",
        "studentNumber"
      ],
      "line": 35,
      "id": "create-account-state-search;user-can-create-a-new-teacher-account-in-taxable-state-using-school-search;;1"
    },
    {
      "cells": [
        "Hello",
        "World",
        "6test2021-@sch.com",
        "hello123",
        "New York",
        "Scholastic+Book+Clu",
        "5"
      ],
      "line": 36,
      "id": "create-account-state-search;user-can-create-a-new-teacher-account-in-taxable-state-using-school-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "User can create a new teacher account in taxable state using School Search",
  "description": "",
  "id": "create-account-state-search;user-can-create-a-new-teacher-account-in-taxable-state-using-school-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Get Started and Create An Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Teacher account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click NEXT",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Mr.\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027Hello\u0027 in First Name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027World\u0027 in Last Name",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u00276test2021-@sch.com\u0027 in Email Address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type \u0027hello123\u0027 in Password",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I check on Terms of Use CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \u0027New York\u0027 from State Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select \u0027New York\u0027 from City Dropdown",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click SEARCH Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I type \u0027Scholastic+Book+Clu\u0027 in School name",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I choosing \u0027Scholastic Book Club\u0027 School",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \u0027Teacher by Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \u00271st Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I type \u00275\u0027 number of students",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \u0027NA\u0027 on Preferred Reading Level",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click Continue to Site Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Profile",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify there is a CLASS CODE present on Home-Page and MyAccount-Page, the code is the same",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify same teacher name is present on My Accounts",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify same school address is present as selected while creating the account",
  "keyword": "And "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 3680512100,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickCreateAnAccount()"
});
formatter.result({
  "duration": 235908900,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickTeacherAccount()"
});
formatter.result({
  "duration": 115791600,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickNextButton()"
});
formatter.result({
  "duration": 2150983100,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.titleSelectDropDown()"
});
formatter.result({
  "duration": 2223858100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setFirstName(String)"
});
formatter.result({
  "duration": 94182800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "World",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setLastName(String)"
});
formatter.result({
  "duration": 102468500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6test2021-@sch.com",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setEmailAddress(String)"
});
formatter.result({
  "duration": 162011000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello123",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setPasswordField(String)"
});
formatter.result({
  "duration": 165769900,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.checkOnTermsOfUseCheckBox()"
});
formatter.result({
  "duration": 132878100,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2089852200,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectSchoolStateDropdown()"
});
formatter.result({
  "duration": 7435505400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 10
    }
  ],
  "location": "createAnAccountSD.selectSchoolCityDropdown(String)"
});
formatter.result({
  "duration": 7619353800,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickSearchButton()"
});
formatter.result({
  "duration": 11185177800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scholastic+Book+Clu",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setSchoolName(String)"
});
formatter.result({
  "duration": 4269227500,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickScholasticBook()"
});
formatter.result({
  "duration": 4211896100,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2136348300,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectRoleDropdown()"
});
formatter.result({
  "duration": 2296084100,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectGradeDropdown()"
});
formatter.result({
  "duration": 2268803900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setNumberOfStudents(String)"
});
formatter.result({
  "duration": 1080402700,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2171834000,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectTypeDropdown()"
});
formatter.result({
  "duration": 2311271500,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickContinueToSiteButton()"
});
formatter.result({
  "duration": 6007158300,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickMyAccountDropdown()"
});
formatter.result({
  "duration": 1163031200,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickProfileDropdown()"
});
formatter.result({
  "duration": 3368687300,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyCodeIsSame()"
});
formatter.result({
  "duration": 80699900,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyNamesFromHomepageAndProfile()"
});
formatter.result({
  "duration": 73786100,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyAddressIsSame()"
});
formatter.result({
  "duration": 96211000,
  "status": "passed"
});
formatter.after({
  "duration": 4178178200,
  "status": "passed"
});
formatter.uri("CreateAccountZipCode.feature");
formatter.feature({
  "line": 2,
  "name": "Create Account by Zip Code",
  "description": "",
  "id": "create-account-by-zip-code",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User can create a new teacher account in taxable state using Zip Code",
  "description": "",
  "id": "create-account-by-zip-code;user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Get Started and Create An Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Teacher account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click NEXT",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Mr.\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027\u003cfirstName\u003e\u0027 in First Name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027\u003clastName\u003e\u0027 in Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027\u003cemail\u003e\u0027 in Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type \u0027\u003cpassword\u003e\u0027 in Password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I check on Terms of Use CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type \u0027\u003czip code\u003e\u0027 in Zip Code",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click SEARCH",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I type \u0027\u003cschoolName\u003e\u0027 in School name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I choosing \u0027Scholastic Book Club\u0027 School",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \u0027Teacher by Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \u00271st Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I type \u0027\u003cstudentNumber\u003e\u0027 number of students",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \u0027NA\u0027 on Preferred Reading Level",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Continue to Site Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Profile",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify there is a CLASS CODE present on Home-Page and MyAccount-Page, the code is the same",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify same teacher name is present on My Accounts",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify same school address is present as selected while creating the account",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "create-account-by-zip-code;user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "zip code",
        "schoolName",
        "studentNumber"
      ],
      "line": 34,
      "id": "create-account-by-zip-code;user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code;;1"
    },
    {
      "cells": [
        "Hello",
        "World",
        "6btest2021-test@gmail.com",
        "hello123",
        "10012",
        "Scholastic+Book+Clu",
        "5"
      ],
      "line": 35,
      "id": "create-account-by-zip-code;user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "User can create a new teacher account in taxable state using Zip Code",
  "description": "",
  "id": "create-account-by-zip-code;user-can-create-a-new-teacher-account-in-taxable-state-using-zip-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Get Started and Create An Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Teacher account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click NEXT",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Mr.\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027Hello\u0027 in First Name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027World\u0027 in Last Name",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u00276btest2021-test@gmail.com\u0027 in Email Address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type \u0027hello123\u0027 in Password",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I check on Terms of Use CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type \u002710012\u0027 in Zip Code",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click SEARCH",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I type \u0027Scholastic+Book+Clu\u0027 in School name",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I choosing \u0027Scholastic Book Club\u0027 School",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \u0027Teacher by Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \u00271st Grade\u0027 from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I type \u00275\u0027 number of students",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click NEXT button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \u0027NA\u0027 on Preferred Reading Level",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Continue to Site Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Profile",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify there is a CLASS CODE present on Home-Page and MyAccount-Page, the code is the same",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify same teacher name is present on My Accounts",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify same school address is present as selected while creating the account",
  "keyword": "And "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 3847871100,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickCreateAnAccount()"
});
formatter.result({
  "duration": 259584300,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickTeacherAccount()"
});
formatter.result({
  "duration": 108820500,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickNextButton()"
});
formatter.result({
  "duration": 2110170700,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.titleSelectDropDown()"
});
formatter.result({
  "duration": 2200696400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setFirstName(String)"
});
formatter.result({
  "duration": 94684100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "World",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setLastName(String)"
});
formatter.result({
  "duration": 98460900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6btest2021-test@gmail.com",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setEmailAddress(String)"
});
formatter.result({
  "duration": 177210200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello123",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setPasswordField(String)"
});
formatter.result({
  "duration": 134657400,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.checkOnTermsOfUseCheckBox()"
});
formatter.result({
  "duration": 110190200,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2087737700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10012",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setZipCode(String)"
});
formatter.result({
  "duration": 77447500,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickSearchBox()"
});
formatter.result({
  "duration": 2080821900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scholastic+Book+Clu",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setSchoolName(String)"
});
formatter.result({
  "duration": 5594438700,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickScholasticBook()"
});
formatter.result({
  "duration": 4150008900,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2150222800,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectRoleDropdown()"
});
formatter.result({
  "duration": 2334550700,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectGradeDropdown()"
});
formatter.result({
  "duration": 2260580700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setNumberOfStudents(String)"
});
formatter.result({
  "duration": 1074650600,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "duration": 2140855600,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.selectTypeDropdown()"
});
formatter.result({
  "duration": 2300801100,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.clickContinueToSiteButton()"
});
formatter.result({
  "duration": 5814662100,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickMyAccountDropdown()"
});
formatter.result({
  "duration": 1169768800,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickProfileDropdown()"
});
formatter.result({
  "duration": 1909357300,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyCodeIsSame()"
});
formatter.result({
  "duration": 60128800,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyNamesFromHomepageAndProfile()"
});
formatter.result({
  "duration": 80922300,
  "status": "passed"
});
formatter.match({
  "location": "createAnAccountSD.verifyAddressIsSame()"
});
formatter.result({
  "duration": 89889600,
  "status": "passed"
});
formatter.after({
  "duration": 102416700,
  "status": "passed"
});
formatter.uri("DeleteItemCartPage.feature");
formatter.feature({
  "line": 2,
  "name": "Delete item on cart page",
  "description": "",
  "id": "delete-item-on-cart-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify user can delete item on Cart page",
  "description": "",
  "id": "delete-item-on-cart-page;verify-user-can-delete-item-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027\u003cemail\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \u00275\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027John\u0027 in Student name and \u00272W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add \u00272\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type \u0027John\u0027 in Student name and \u00272W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add \u00272\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type \u0027Michael\u0027 in Student name and \u00273W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I add \u00274\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I type \u0027Michael\u0027 in Student name and \u00273W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I add \u002710\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on REVIEW CART",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on \u0027X\u0027 button corresponding to 2S8 item for Harry",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click YES",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify For Harry, item 2S8 gets deleted, Respective amounts and quantities get updated",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "delete-item-on-cart-page;verify-user-can-delete-item-on-cart-page;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 26,
      "id": "delete-item-on-cart-page;verify-user-can-delete-item-on-cart-page;;1"
    },
    {
      "cells": [
        "happy.world@gmail.com",
        "happyworld2021"
      ],
      "line": 27,
      "id": "delete-item-on-cart-page;verify-user-can-delete-item-on-cart-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user can delete item on Cart page",
  "description": "",
  "id": "delete-item-on-cart-page;verify-user-can-delete-item-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027happy.world@gmail.com\u0027 and password \u0027happyworld2021\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \u00275\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027John\u0027 in Student name and \u00272W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add \u00272\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type \u0027John\u0027 in Student name and \u00272W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add \u00272\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type \u0027Michael\u0027 in Student name and \u00273W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I add \u00274\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I type \u0027Michael\u0027 in Student name and \u00273W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I add \u002710\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on REVIEW CART",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on \u0027X\u0027 button corresponding to 2S8 item for Harry",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click YES",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify For Harry, item 2S8 gets deleted, Respective amounts and quantities get updated",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 3607486600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "happy.world@gmail.com",
      "offset": 21
    },
    {
      "val": "happyworld2021",
      "offset": 58
    }
  ],
  "location": "signInSD.clickSignIn(String,String)"
});
formatter.result({
  "duration": 13045001600,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.moveMouseToEnterOrders()"
});
formatter.result({
  "duration": 1197994300,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickStudentFlyerOrders()"
});
formatter.result({
  "duration": 2602562800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "1W1",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "duration": 3477297900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "duration": 1175645700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "1W2",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "duration": 3453006400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 8
    },
    {
      "val": "2W1",
      "offset": 35
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "duration": 3422054900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "duration": 1159661100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 8
    },
    {
      "val": "2W2",
      "offset": 35
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "duration": 3450736600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "duration": 1199016600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 8
    },
    {
      "val": "3W1",
      "offset": 38
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "duration": 3426427400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "duration": 1168674000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 8
    },
    {
      "val": "3W2",
      "offset": 38
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "duration": 3396954600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "duration": 1184735000,
  "status": "passed"
});
formatter.match({
  "location": "studentFlyerOrdersSD.clickReviewCartButton()"
});
formatter.result({
  "duration": 4242359000,
  "status": "passed"
});
formatter.match({
  "location": "reviewYourCartSD.getInfoBeforeDeleteItem()"
});
formatter.result({
  "duration": 2326798500,
  "status": "passed"
});
formatter.match({
  "location": "reviewYourCartSD.clickYesButton()"
});
formatter.result({
  "duration": 3339763000,
  "status": "passed"
});
formatter.match({
  "location": "reviewYourCartSD.verifyDataGotUpdated()"
});
formatter.result({
  "duration": 140700,
  "status": "passed"
});
formatter.after({
  "duration": 4134144600,
  "status": "passed"
});
formatter.uri("ListFromQuickView.feature");
formatter.feature({
  "line": 2,
  "name": "List from Quick View",
  "description": "",
  "id": "list-from-quick-view",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Teacher can add books in Recommendations List from Quick View",
  "description": "",
  "id": "list-from-quick-view;teacher-can-add-books-in-recommendations-list-from-quick-view",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027\u003cemail\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search for \u0027harry\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Quick Look",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Recommend button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Recommendation to Students checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I close two windows \u0027Add to My Lists\u0027 and \u0027Quick Look\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click My Lists from Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Verify the item is added in Recommendations to Students Lists under My Lists",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "list-from-quick-view;teacher-can-add-books-in-recommendations-list-from-quick-view;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 16,
      "id": "list-from-quick-view;teacher-can-add-books-in-recommendations-list-from-quick-view;;1"
    },
    {
      "cells": [
        "happy.world@gmail.com",
        "happyworld2021"
      ],
      "line": 17,
      "id": "list-from-quick-view;teacher-can-add-books-in-recommendations-list-from-quick-view;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Teacher can add books in Recommendations List from Quick View",
  "description": "",
  "id": "list-from-quick-view;teacher-can-add-books-in-recommendations-list-from-quick-view;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027happy.world@gmail.com\u0027 and password \u0027happyworld2021\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search for \u0027harry\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Quick Look",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Recommend button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Recommendation to Students checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I close two windows \u0027Add to My Lists\u0027 and \u0027Quick Look\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click My Lists from Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Verify the item is added in Recommendations to Students Lists under My Lists",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 3751921500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "happy.world@gmail.com",
      "offset": 21
    },
    {
      "val": "happyworld2021",
      "offset": 58
    }
  ],
  "location": "signInSD.clickSignIn(String,String)"
});
formatter.result({
  "duration": 16854930600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harry",
      "offset": 14
    }
  ],
  "location": "homepageSD.typeInSearchBar(String)"
});
formatter.result({
  "duration": 6660306900,
  "status": "passed"
});
formatter.match({
  "location": "searchResultPageSD.clickOnQuickLook()"
});
formatter.result({
  "duration": 2359185900,
  "status": "passed"
});
formatter.match({
  "location": "searchResultPageSD.clickRecommendButton()"
});
formatter.result({
  "duration": 2207224700,
  "status": "passed"
});
formatter.match({
  "location": "searchResultPageSD.clickRecommendationsCheckBox()"
});
formatter.result({
  "duration": 1201182600,
  "status": "passed"
});
formatter.match({
  "location": "searchResultPageSD.closeTwoWindows()"
});
formatter.result({
  "duration": 1201152900,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickMyListsDropDown()"
});
formatter.result({
  "duration": 7247855500,
  "status": "passed"
});
formatter.match({
  "location": "myListsSD.verifyTheItemsAreAddedInList()"
});
formatter.result({
  "duration": 145386500,
  "error_message": "java.lang.AssertionError: The book did not added on My List expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat StepDefinition.Scholastic.myListsSD.verifyTheItemsAreAddedInList(myListsSD.java:31)\r\n\tat ✽.Then I Verify the item is added in Recommendations to Students Lists under My Lists(ListFromQuickView.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4164260900,
  "status": "passed"
});
formatter.uri("OnlyThreeCC.feature");
formatter.feature({
  "line": 2,
  "name": "Three CC",
  "description": "",
  "id": "three-cc",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify teacher can add only 3 credit cards under My Credit Cards in My Accounts",
  "description": "",
  "id": "three-cc;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027\u003cemail\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on My Account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Profile",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Add a Card",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify I get error message \u0027You can only store three credit cards\u0027 while adding 4th cc",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "three-cc;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 13,
      "id": "three-cc;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts;;1"
    },
    {
      "cells": [
        "happy.world@gmail.com",
        "happyworld2021"
      ],
      "line": 14,
      "id": "three-cc;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verify teacher can add only 3 credit cards under My Credit Cards in My Accounts",
  "description": "",
  "id": "three-cc;verify-teacher-can-add-only-3-credit-cards-under-my-credit-cards-in-my-accounts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027happy.world@gmail.com\u0027 and password \u0027happyworld2021\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on My Account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Profile",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Add a Card",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify I get error message \u0027You can only store three credit cards\u0027 while adding 4th cc",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 4114662200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "happy.world@gmail.com",
      "offset": 21
    },
    {
      "val": "happyworld2021",
      "offset": 58
    }
  ],
  "location": "signInSD.clickSignIn(String,String)"
});
formatter.result({
  "duration": 12910515000,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickMyAccountDropdown()"
});
formatter.result({
  "duration": 1590790800,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickProfileDropdown()"
});
formatter.result({
  "duration": 1856775600,
  "status": "passed"
});
formatter.match({
  "location": "profileSD.clickOnAddACard()"
});
formatter.result({
  "duration": 170666000,
  "status": "passed"
});
formatter.match({
  "location": "profileSD.getErrorMessage()"
});
formatter.result({
  "duration": 24844600,
  "status": "passed"
});
formatter.after({
  "duration": 4164806000,
  "status": "passed"
});
formatter.uri("TeacherGetsErrorMsg.feature");
formatter.feature({
  "line": 2,
  "name": "Teacher gets error message",
  "description": "",
  "id": "teacher-gets-error-message",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify teacher gets error for invalid item number in SFO (Student Flyer Order)",
  "description": "",
  "id": "teacher-gets-error-message;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027\u003cemail\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Harry\u0027 in Student name and \u0027111\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify Teacher gets error message for invalid item number in SFO",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "teacher-gets-error-message;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order);",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 13,
      "id": "teacher-gets-error-message;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order);;1"
    },
    {
      "cells": [
        "happy.world@gmail.com",
        "happyworld2021"
      ],
      "line": 14,
      "id": "teacher-gets-error-message;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verify teacher gets error for invalid item number in SFO (Student Flyer Order)",
  "description": "",
  "id": "teacher-gets-error-message;verify-teacher-gets-error-for-invalid-item-number-in-sfo-(student-flyer-order);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027happy.world@gmail.com\u0027 and password \u0027happyworld2021\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Harry\u0027 in Student name and \u0027111\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify Teacher gets error message for invalid item number in SFO",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 3810505900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "happy.world@gmail.com",
      "offset": 21
    },
    {
      "val": "happyworld2021",
      "offset": 58
    }
  ],
  "location": "signInSD.clickSignIn(String,String)"
});
formatter.result({
  "duration": 13460791500,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.moveMouseToEnterOrders()"
});
formatter.result({
  "duration": 1192971300,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickStudentFlyerOrders()"
});
formatter.result({
  "duration": 2565724300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "111",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "duration": 3446262700,
  "status": "passed"
});
formatter.match({
  "location": "studentFlyerOrdersSD.verifyTeacherGetsError()"
});
formatter.result({
  "duration": 77165600,
  "status": "passed"
});
formatter.after({
  "duration": 104439100,
  "status": "passed"
});
formatter.uri("YTO-FlyerJumper.feature");
formatter.feature({
  "line": 2,
  "name": "YTO Flyer Jumper",
  "description": "",
  "id": "yto-flyer-jumper",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify YTO-By Flyer jumper",
  "description": "",
  "id": "yto-flyer-jumper;verify-yto-by-flyer-jumper",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027\u003cemail\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Your Teacher order",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on of Price-QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify Teacher sees a jumper right above the box with message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter data \u00274\u0027 on Price-QTY box",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on another Price-QTY Box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify Teacher does NOT see any jumper",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "yto-flyer-jumper;verify-yto-by-flyer-jumper;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 16,
      "id": "yto-flyer-jumper;verify-yto-by-flyer-jumper;;1"
    },
    {
      "cells": [
        "happy.world@gmail.com",
        "happyworld2021"
      ],
      "line": 17,
      "id": "yto-flyer-jumper;verify-yto-by-flyer-jumper;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify YTO-By Flyer jumper",
  "description": "",
  "id": "yto-flyer-jumper;verify-yto-by-flyer-jumper;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027happy.world@gmail.com\u0027 and password \u0027happyworld2021\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Your Teacher order",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on of Price-QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify Teacher sees a jumper right above the box with message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter data \u00274\u0027 on Price-QTY box",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on another Price-QTY Box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify Teacher does NOT see any jumper",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 3859878900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "happy.world@gmail.com",
      "offset": 21
    },
    {
      "val": "happyworld2021",
      "offset": 58
    }
  ],
  "location": "signInSD.clickSignIn(String,String)"
});
formatter.result({
  "duration": 13681519600,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.moveMouseToEnterOrders()"
});
formatter.result({
  "duration": 1175841500,
  "status": "passed"
});
formatter.match({
  "location": "homepageSD.clickYourTeacherOrder()"
});
formatter.result({
  "duration": 3452197500,
  "status": "passed"
});
formatter.match({
  "location": "yourTeacherOrderSD.clickPriceQtyBox()"
});
formatter.result({
  "duration": 163816500,
  "status": "passed"
});
formatter.match({
  "location": "yourTeacherOrderSD.verifyTeacherSeesJumper()"
});
formatter.result({
  "duration": 194337700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "yourTeacherOrderSD.enterDattaOnQtyBox(String)"
});
formatter.result({
  "duration": 1107851100,
  "status": "passed"
});
formatter.match({
  "location": "yourTeacherOrderSD.clickAnotherQtyBox()"
});
formatter.result({
  "duration": 1144186700,
  "status": "passed"
});
formatter.match({
  "location": "yourTeacherOrderSD.verifyTeacherDoesNotSeeJumper()"
});
formatter.result({
  "duration": 68312900,
  "status": "passed"
});
formatter.after({
  "duration": 110400100,
  "status": "passed"
});
formatter.uri("ZeroTax-SFO-Order.feature");
formatter.feature({
  "line": 2,
  "name": "Zero Tax for SFO order",
  "description": "",
  "id": "zero-tax-for-sfo-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify zero tax for only SFO order in the checkout",
  "description": "",
  "id": "zero-tax-for-sfo-order;verify-zero-tax-for-only-sfo-order-in-the-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027\u003cemail\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \u00275\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add \u00271\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type \u0027John\u0027 in Student name and \u00272W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I add \u00272\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type \u0027Michael\u0027 in Student name and \u00273W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I add \u00274\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I type \u0027Michael\u0027 in Student name and \u00273W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add \u002710\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on REVIEW CART",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on PROCEED TO CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on PROCEED TO CHECKOUT from FLYER",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify Tax amount",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "zero-tax-for-sfo-order;verify-zero-tax-for-only-sfo-order-in-the-checkout;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "zero-tax-for-sfo-order;verify-zero-tax-for-only-sfo-order-in-the-checkout;;1"
    },
    {
      "cells": [
        "newyork@sch.com",
        "hello123"
      ],
      "line": 26,
      "id": "zero-tax-for-sfo-order;verify-zero-tax-for-only-sfo-order-in-the-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Verify zero tax for only SFO order in the checkout",
  "description": "",
  "id": "zero-tax-for-sfo-order;verify-zero-tax-for-only-sfo-order-in-the-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027newyork@sch.com\u0027 and password \u0027hello123\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \u00275\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add \u00271\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type \u0027John\u0027 in Student name and \u00272W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I add \u00272\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type \u0027Michael\u0027 in Student name and \u00273W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I add \u00274\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I type \u0027Michael\u0027 in Student name and \u00273W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add \u002710\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on REVIEW CART",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on PROCEED TO CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on PROCEED TO CHECKOUT from FLYER",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify Tax amount",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 3704083600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newyork@sch.com",
      "offset": 21
    },
    {
      "val": "hello123",
      "offset": 52
    }
  ],
  "location": "signInSD.clickSignIn(String,String)"
});
formatter.result({
  "duration": 40850019600,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Element is not found within 30 seconds (tried for 30 second(s) with 1000 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Pages.WebCommands.getElement(WebCommands.java:58)\r\n\tat Pages.WebCommands.type(WebCommands.java:106)\r\n\tat Pages.Scholastic.signIN.typePasswordInSignIn(signIN.java:47)\r\n\tat StepDefinition.Scholastic.signInSD.clickSignIn(signInSD.java:21)\r\n\tat ✽.And I log In with email \u0027newyork@sch.com\u0027 and password \u0027hello123\u0027(ZeroTax-SFO-Order.feature:6)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#password\\-text\\-field\"}\n  (Session info: chrome\u003d94.0.4606.81)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\arian\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63386}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3833d1a3b310e68a37977cfd034a91ec\n*** Element info: {Using\u003did, value\u003dpassword-text-field}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Pages.WebCommands$2.apply(WebCommands.java:60)\r\n\tat Pages.WebCommands$2.apply(WebCommands.java:58)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Pages.WebCommands.getElement(WebCommands.java:58)\r\n\tat Pages.WebCommands.type(WebCommands.java:106)\r\n\tat Pages.Scholastic.signIN.typePasswordInSignIn(signIN.java:47)\r\n\tat StepDefinition.Scholastic.signInSD.clickSignIn(signInSD.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "homepageSD.moveMouseToEnterOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickStudentFlyerOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "1W1",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "1W2",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 8
    },
    {
      "val": "2W2",
      "offset": 35
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 8
    },
    {
      "val": "3W1",
      "offset": 38
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 8
    },
    {
      "val": "3W2",
      "offset": 38
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 7
    }
  ],
  "location": "studentFlyerOrdersSD.typeQtyBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "studentFlyerOrdersSD.clickReviewCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "reviewYourCartSD.clickProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "reviewYourCartSD.clickProceedToCheckoutButtonFlayer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "rewardsCouponsSD.verifyTaxAmount()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 125876700,
  "status": "passed"
});
formatter.uri("non-zeroTax-SFO-YTO.feature");
formatter.feature({
  "line": 2,
  "name": "non-zero tax is present for SFO-YTO",
  "description": "",
  "id": "non-zero-tax-is-present-for-sfo-yto",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify non-zero tax is present for SFO-YTO orders in the checkout for teacher with tax state school",
  "description": "",
  "id": "non-zero-tax-is-present-for-sfo-yto;verify-non-zero-tax-is-present-for-sfo-yto-orders-in-the-checkout-for-teacher-with-tax-state-school",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027\u003cemail\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027Harry\u0027 in Student name and \u00272W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Harry\u0027 in Student name and \u00272W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027Harry\u0027 in Student name and \u00273W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click Your Teacher Order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click BY Flyer",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter data \u00272\u0027 on Price-QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter data \u00271\u0027 on different Price-QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on REVIEW CART on YTO Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on PROCEED TO CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on PROCEED TO CHECKOUT from FLYER",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify Tax amount",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "non-zero-tax-is-present-for-sfo-yto;verify-non-zero-tax-is-present-for-sfo-yto-orders-in-the-checkout-for-teacher-with-tax-state-school;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 23,
      "id": "non-zero-tax-is-present-for-sfo-yto;verify-non-zero-tax-is-present-for-sfo-yto-orders-in-the-checkout-for-teacher-with-tax-state-school;;1"
    },
    {
      "cells": [
        "nonTaxState@schlastic.com",
        "hello123"
      ],
      "line": 24,
      "id": "non-zero-tax-is-present-for-sfo-yto;verify-non-zero-tax-is-present-for-sfo-yto-orders-in-the-checkout-for-teacher-with-tax-state-school;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Verify non-zero tax is present for SFO-YTO orders in the checkout for teacher with tax state school",
  "description": "",
  "id": "non-zero-tax-is-present-for-sfo-yto;verify-non-zero-tax-is-present-for-sfo-yto-orders-in-the-checkout-for-teacher-with-tax-state-school;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch scholastic.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log In with email \u0027nonTaxState@schlastic.com\u0027 and password \u0027hello123\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to Enter Orders",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click Student Flyer Orders",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type \u0027Harry\u0027 in Student name and \u00271W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type \u0027Harry\u0027 in Student name and \u00272W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Harry\u0027 in Student name and \u00272W2\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027Harry\u0027 in Student name and \u00273W1\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click Your Teacher Order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click BY Flyer",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter data \u00272\u0027 on Price-QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter data \u00271\u0027 on different Price-QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on REVIEW CART on YTO Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on PROCEED TO CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on PROCEED TO CHECKOUT from FLYER",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify Tax amount",
  "keyword": "Then "
});
formatter.match({
  "location": "homepageSD.lunchWebSite()"
});
formatter.result({
  "duration": 4449266100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nonTaxState@schlastic.com",
      "offset": 21
    },
    {
      "val": "hello123",
      "offset": 62
    }
  ],
  "location": "signInSD.clickSignIn(String,String)"
});
formatter.result({
  "duration": 40730039500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Element is not found within 30 seconds (tried for 30 second(s) with 1000 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Pages.WebCommands.getElement(WebCommands.java:58)\r\n\tat Pages.WebCommands.type(WebCommands.java:106)\r\n\tat Pages.Scholastic.signIN.typePasswordInSignIn(signIN.java:47)\r\n\tat StepDefinition.Scholastic.signInSD.clickSignIn(signInSD.java:21)\r\n\tat ✽.And I log In with email \u0027nonTaxState@schlastic.com\u0027 and password \u0027hello123\u0027(non-zeroTax-SFO-YTO.feature:6)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#password\\-text\\-field\"}\n  (Session info: chrome\u003d94.0.4606.81)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\arian\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53580}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a20239dbf1c5b3264a5d42a7de7f35d8\n*** Element info: {Using\u003did, value\u003dpassword-text-field}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Pages.WebCommands$2.apply(WebCommands.java:60)\r\n\tat Pages.WebCommands$2.apply(WebCommands.java:58)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Pages.WebCommands.getElement(WebCommands.java:58)\r\n\tat Pages.WebCommands.type(WebCommands.java:106)\r\n\tat Pages.Scholastic.signIN.typePasswordInSignIn(signIN.java:47)\r\n\tat StepDefinition.Scholastic.signInSD.clickSignIn(signInSD.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "homepageSD.moveMouseToEnterOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickStudentFlyerOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "1W1",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "2W1",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "2W2",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 8
    },
    {
      "val": "3W1",
      "offset": 36
    }
  ],
  "location": "studentFlyerOrdersSD.typeStudentName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "studentFlyerOrdersSD.clickYourTeacherOrderVertical()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "yourTeacherOrderSD.clickByFlyer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 14
    }
  ],
  "location": "yourTeacherOrderSD.enterDattaOnQtyBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "yourTeacherOrderSD.enterDattaOnDifferentQtyBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "yourTeacherOrderSD.clickReviewCartInYTO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "reviewYourCartSD.clickProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "reviewYourCartSD.clickProceedToCheckoutButtonFlayer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "rewardsCouponsSD.verifyTaxAmount()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 119008000,
  "status": "passed"
});
});