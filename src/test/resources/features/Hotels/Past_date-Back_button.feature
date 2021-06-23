@regression
Feature: Past date and Back Button

  Scenario: Verify past date and back button on Current month's calendar is disabled
    Given I launch Hotels.com
    When I click on Check In Calendar
    Then I Verify past date and back button on Current month's calendar is disabled