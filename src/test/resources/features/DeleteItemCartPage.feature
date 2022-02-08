@regression
Feature: Delete item on cart page

  Scenario Outline: Verify user can delete item on Cart page
    Given I launch scholastic.com
    And I log In with email '<email>' and password '<password>'
    When I go to Enter Orders
    And I click Student Flyer Orders
    And I type 'Harry' in Student name and '2S8' in ITEM# and click ADD
    And I add '5' in QTY box
    And I type 'Harry' in Student name and '11S8' in ITEM# and click ADD
    And I type 'John' in Student name and '2G8' in ITEM# and click ADD
    And I add '2' in QTY box
    And I type 'John' in Student name and '14G8' in ITEM# and click ADD
    And I add '2' in QTY box
    And I type 'Michael' in Student name and '4G8' in ITEM# and click ADD
    And I add '4' in QTY box
    And I type 'Michael' in Student name and '1G8' in ITEM# and click ADD
    And I add '10' in QTY box
    And I click on REVIEW CART
    And I Click on 'X' button corresponding to 2S8 item for Harry
    And I click YES
    Then I verify For Harry, item 2S8 gets deleted, Respective amounts and quantities get updated

    Examples:
      | email | password |
      | 0test2022-nonTaxState@schlastic.com | hello123 |








