@regression
Feature: YTO Flyer Jumper

  Scenario Outline: Verify YTO-By Flyer jumper
    Given I launch scholastic.com
    And I log In with email '<email>' and password '<password>'
    When I go to Enter Orders
    And I click Your Teacher order
    And I click on of Price-QTY box
    Then I verify Teacher sees a jumper right above the box with message
    When I enter data '4' on Price-QTY box
    And I click on another Price-QTY Box
    Then I verify Teacher does NOT see any jumper

    Examples:
      | email | password |
      | 0test2022-nonTaxState@schlastic.com | hello123 |

