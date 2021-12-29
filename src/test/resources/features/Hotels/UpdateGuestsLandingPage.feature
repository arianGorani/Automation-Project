#@regression
Feature: Update Guests on Landing Page

  Scenario: Verify user can update number of guests on Landing page
    Given I launch Hotels.com
    When I click on Guests
    And I select Adult as '4'
    And I select Children as '2'
    And I select first child age '4'
    And I select second child age '<1'
    Then I Verify On Rooms pop-up, number of adults and children are same as selected on step #3 and #4
    When I click Apply Button
    Then I Verify total number of guests in sum of adults and children are same as selected on step #3 and #4