@regression
Feature: Create Account State Search

  Scenario Outline: User can create a new teacher account in taxable state using School Search
    Given I launch scholastic.com
    When I click Get Started and Create An Account
    And I select Teacher account
    And I click NEXT
    And I select 'Mr.' from Dropdown
    And I type '<firstName>' in First Name
    And I type '<lastName>' in Last Name
    And I type '<email>' in Email Address
    And I type '<password>' in Password
    And I check on Terms of Use CheckBox
    And I click NEXT button
    And I select 'New York' from State Dropdown
    And I select '<city>' from City Dropdown
    And I click SEARCH Button
    And I type '<schoolName>' in School name
    And I choosing 'Scholastic Book Club' School
    And I click NEXT button
    And I select 'Teacher by Grade' from Dropdown
    And I select '1st Grade' from Dropdown
    And I type '<studentNumber>' number of students
    And I click NEXT button
    And I select 'NA' on Preferred Reading Level
    And I click Continue to Site Button
    And I click on My Account
    And I click on Profile
    Then I verify there is a CLASS CODE present on Home-Page and MyAccount-Page, the code is the same
    And I verify same teacher name is present on My Accounts
    And I verify same school address is present as selected while creating the account

    Examples:
      | firstName | lastName | email | password | city | schoolName | studentNumber |
      | Hello     |   World  | test2022-@sch.com |  hello123  | New York | Scholastic+Book+Clu | 5 |

