@regression
Feature: Zero Tax for SFO order

  Scenario Outline: Verify zero tax for only SFO order in the checkout
    Given I launch scholastic.com
    And I log In with email '<email>' and password '<password>'
    When I go to Enter Orders
    And I click Student Flyer Orders
    And I type 'Harry' in Student name and '1W1' in ITEM# and click ADD
    And I add '5' in QTY box
    And I type 'Harry' in Student name and '1W2' in ITEM# and click ADD
    And I add '1' in QTY box
    And I type 'John' in Student name and '2W2' in ITEM# and click ADD
    And I add '2' in QTY box
    And I type 'Michael' in Student name and '3W1' in ITEM# and click ADD
    And I add '4' in QTY box
    And I type 'Michael' in Student name and '3W2' in ITEM# and click ADD
    And I add '10' in QTY box
    And I click on REVIEW CART
    And I click on PROCEED TO CHECKOUT
    And I click on PROCEED TO CHECKOUT from FLYER
    Then I verify Tax amount

    Examples:
      | email | password |
      | newyork@sch.com | hello123 |