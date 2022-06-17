Feature: test simple feature

Scenario: Google search
Given I am on Google search page
When I type 'Cypress' in the search field
Then it should be ok