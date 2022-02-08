@regression
Feature: Three CC

  Scenario Outline: Verify teacher can add only 3 credit cards under My Credit Cards in My Accounts
    Given I launch scholastic.com
    And I log In with email '<email>' and password '<password>'
    When I click on My Account
    And I click on Profile
    And I click on Add a Card
    Then I verify I get error message 'You can only store three credit cards' while adding 4th cc

    Examples:
      | email | password |
      | 0test2022-nonTaxState@schlastic.com | hello123 |