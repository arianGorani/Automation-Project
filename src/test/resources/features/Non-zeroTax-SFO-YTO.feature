@regression
Feature: non-zero tax is present for SFO-YTO

  Scenario Outline: Verify non-zero tax is present for SFO-YTO orders in the checkout for teacher with tax state school
    Given I launch scholastic.com
    And I log In with email '<email>' and password '<password>'
    When I go to Enter Orders
    And I click Student Flyer Orders
    And I type 'Harry' in Student name and '1W1' in ITEM# and click ADD
    And I type 'Harry' in Student name and '2W1' in ITEM# and click ADD
    And I type 'Harry' in Student name and '2W2' in ITEM# and click ADD
    And I type 'Harry' in Student name and '3W1' in ITEM# and click ADD
    And I click Your Teacher Order
    And I click BY Flyer
    And I enter data '2' on Price-QTY box
    And I enter data '1' on different Price-QTY box
    And I click on REVIEW CART on YTO Page
    And I click on PROCEED TO CHECKOUT
    And I click on PROCEED TO CHECKOUT from FLYER
    Then I verify Tax amount

    Examples:
      | email | password |
<<<<<<< HEAD
      | 2022Test-nonTaxState@schlastic.com | hello123 |
=======
      | 0test2022-nonTaxState@schlastic.com | hello123 |
>>>>>>> test_brench
