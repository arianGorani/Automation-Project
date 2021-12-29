Feature: Change Date Button Displayed

  Scenario: Verify CHANGE DATES button is displayed at the end of search results
    Given I launch Hotels.com
    When I type 'Bora' in Search field
    And I choosing 'Bora Bora, French Polynesia'
    And I choosing check in Date 'October 2021'
   # And I choosing check out Date 'October 10 2021'
   # And I click Apply Button
   # And I click on SEARCH button
   # Then I verify is CHANGE DATES button displayed






