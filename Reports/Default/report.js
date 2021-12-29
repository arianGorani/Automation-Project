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
  "name": "I click on Create An Account",
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
        "11test2021-nonTaxState@schlastic.com",
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
formatter.before({
  "duration": 3416572500,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 91\nCurrent browser version is 94.0.4606.81 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x002D2DB3+2502067]\n\tOrdinal0 [0x0026C5B1+2082225]\n\tOrdinal0 [0x00172498+1057944]\n\tOrdinal0 [0x001905DA+1181146]\n\tOrdinal0 [0x0018C43C+1164348]\n\tOrdinal0 [0x00189C73+1154163]\n\tOrdinal0 [0x001B9A22+1350178]\n\tOrdinal0 [0x001B967A+1349242]\n\tOrdinal0 [0x001B5BEB+1334251]\n\tOrdinal0 [0x00192174+1188212]\n\tOrdinal0 [0x00193009+1191945]\n\tGetHandleVerifier [0x0044EC5C+1511084]\n\tGetHandleVerifier [0x004F8522+2205554]\n\tGetHandleVerifier [0x00353393+480739]\n\tGetHandleVerifier [0x00352579+477129]\n\tOrdinal0 [0x00271E5D+2104925]\n\tOrdinal0 [0x002763F8+2122744]\n\tOrdinal0 [0x00276537+2123063]\n\tOrdinal0 [0x0027EE53+2158163]\n\tBaseThreadInitThunk [0x7646FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77DB7A9E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77DB7A6E+238]\n\t(No symbol) [0x00000000]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat DriverWrapper.Web.openUrl(Web.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
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
  "name": "I click on Create An Account",
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
  "name": "I type \u002711test2021-nonTaxState@schlastic.com\u0027 in Email Address",
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
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickCreateAnAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickTeacherAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.titleSelectDropDown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11test2021-nonTaxState@schlastic.com",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setEmailAddress(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.checkOnTermsOfUseCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickSearchBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickAdakSchool()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectRoleDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectGradeDropdown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectTypeDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickContinueToSiteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickMyAccountDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickProfileDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyCodeIsSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyNamesFromHomepageAndProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyAddressIsSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 239200,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"DriverWrapper.Web.driver\" is null\r\n\tat DriverWrapper.Web.closePage(Web.java:36)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
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
  "name": "I click on Create An Account",
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
        "11test2021-@sch.com",
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
formatter.before({
  "duration": 1365316700,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 91\nCurrent browser version is 94.0.4606.81 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x002D2DB3+2502067]\n\tOrdinal0 [0x0026C5B1+2082225]\n\tOrdinal0 [0x00172498+1057944]\n\tOrdinal0 [0x001905DA+1181146]\n\tOrdinal0 [0x0018C43C+1164348]\n\tOrdinal0 [0x00189C73+1154163]\n\tOrdinal0 [0x001B9A22+1350178]\n\tOrdinal0 [0x001B967A+1349242]\n\tOrdinal0 [0x001B5BEB+1334251]\n\tOrdinal0 [0x00192174+1188212]\n\tOrdinal0 [0x00193009+1191945]\n\tGetHandleVerifier [0x0044EC5C+1511084]\n\tGetHandleVerifier [0x004F8522+2205554]\n\tGetHandleVerifier [0x00353393+480739]\n\tGetHandleVerifier [0x00352579+477129]\n\tOrdinal0 [0x00271E5D+2104925]\n\tOrdinal0 [0x002763F8+2122744]\n\tOrdinal0 [0x00276537+2123063]\n\tOrdinal0 [0x0027EE53+2158163]\n\tBaseThreadInitThunk [0x7646FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77DB7A9E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77DB7A6E+238]\n\t(No symbol) [0x00000000]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat DriverWrapper.Web.openUrl(Web.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
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
  "name": "I click on Create An Account",
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
  "name": "I type \u002711test2021-@sch.com\u0027 in Email Address",
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
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickCreateAnAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickTeacherAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.titleSelectDropDown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11test2021-@sch.com",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setEmailAddress(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.checkOnTermsOfUseCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectSchoolStateDropdown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickScholasticBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectRoleDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectGradeDropdown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectTypeDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickContinueToSiteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickMyAccountDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickProfileDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyCodeIsSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyNamesFromHomepageAndProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyAddressIsSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 166600,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"DriverWrapper.Web.driver\" is null\r\n\tat DriverWrapper.Web.closePage(Web.java:36)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
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
  "name": "I click on Create An Account",
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
        "11test2021-test@gmail.com",
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
formatter.before({
  "duration": 1385570600,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 91\nCurrent browser version is 94.0.4606.81 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIAN-GORANI\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x002D2DB3+2502067]\n\tOrdinal0 [0x0026C5B1+2082225]\n\tOrdinal0 [0x00172498+1057944]\n\tOrdinal0 [0x001905DA+1181146]\n\tOrdinal0 [0x0018C43C+1164348]\n\tOrdinal0 [0x00189C73+1154163]\n\tOrdinal0 [0x001B9A22+1350178]\n\tOrdinal0 [0x001B967A+1349242]\n\tOrdinal0 [0x001B5BEB+1334251]\n\tOrdinal0 [0x00192174+1188212]\n\tOrdinal0 [0x00193009+1191945]\n\tGetHandleVerifier [0x0044EC5C+1511084]\n\tGetHandleVerifier [0x004F8522+2205554]\n\tGetHandleVerifier [0x00353393+480739]\n\tGetHandleVerifier [0x00352579+477129]\n\tOrdinal0 [0x00271E5D+2104925]\n\tOrdinal0 [0x002763F8+2122744]\n\tOrdinal0 [0x00276537+2123063]\n\tOrdinal0 [0x0027EE53+2158163]\n\tBaseThreadInitThunk [0x7646FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77DB7A9E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77DB7A6E+238]\n\t(No symbol) [0x00000000]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat DriverWrapper.Web.openUrl(Web.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
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
  "name": "I click on Create An Account",
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
  "name": "I type \u002711test2021-test@gmail.com\u0027 in Email Address",
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
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickCreateAnAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickTeacherAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.titleSelectDropDown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11test2021-test@gmail.com",
      "offset": 8
    }
  ],
  "location": "createAnAccountSD.setEmailAddress(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.checkOnTermsOfUseCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickSearchBox()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickScholasticBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectRoleDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectGradeDropdown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.secondNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.selectTypeDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.clickContinueToSiteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickMyAccountDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homepageSD.clickProfileDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyCodeIsSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyNamesFromHomepageAndProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAnAccountSD.verifyAddressIsSame()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 151600,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"DriverWrapper.Web.driver\" is null\r\n\tat DriverWrapper.Web.closePage(Web.java:36)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
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
  "name": "I type \u0027Harry\u0027 in Student name and \u00272S8\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \u00275\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type \u0027Harry\u0027 in Student name and \u002711S8\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type \u0027John\u0027 in Student name and \u00272G8\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add \u00272\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type \u0027John\u0027 in Student name and \u002714G8\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add \u00272\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type \u0027Michael\u0027 in Student name and \u00274G8\u0027 in ITEM# and click ADD",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I add \u00274\u0027 in QTY box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I type \u0027Michael\u0027 in Student name and \u00271G8\u0027 in ITEM# and click ADD",
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
