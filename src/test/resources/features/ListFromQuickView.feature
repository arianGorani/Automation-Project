@regression
Feature: List from Quick View

  Scenario Outline: Teacher can add books in Recommendations List from Quick View
    Given I launch scholastic.com
    And I log In with email '<email>' and password '<password>'
    When I search for 'harry'
    And I click on Quick Look
    And I click on Recommend button
    And I click on Recommendation to Students checkbox
    And I close two windows 'Add to My Lists' and 'Quick Look'
    And I click My Lists from Home Page
    And I click Recommendations for Students
    Then I Verify the item is added in Recommendations to Students Lists under My Lists

    Examples:
      | email | password |
      | happy.world@gmail.com | happyworld2021 |