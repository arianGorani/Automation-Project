@regression
Feature: Teacher gets error message

  Scenario Outline: Verify teacher gets error for invalid item number in SFO (Student Flyer Order)
    Given I launch scholastic.com
    And I log In with email '<email>' and password '<password>'
    When I go to Enter Orders
    And I click Student Flyer Orders
    And I type 'Harry' in Student name and '111' in ITEM# and click ADD
    Then I verify Teacher gets error message for invalid item number in SFO

    Examples:
      | email | password |
      | 2022Test-nonTaxState@schlastic.com | hello123 |

