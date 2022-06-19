Feature: test simple feature

    Scenario: Google search
        Given I am on 'Google' search page
        When I search 'Cypress' term
        Then title should contain 'Cypress'

    Scenario: Wikipedia search
        Given I am on 'Wikipedia' search page
        When I search 'Java' term
        Then title should contain 'Java'
            And article header should be 'Java'