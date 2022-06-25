Feature: todo
  As a user
  I want to add an item to the todo list
  So that I can organize task

  Scenario: Add item to the todo list
    Given a user has navigated to the homepage
    When the user adds "test" to the todo list using the webUI
    Then card "test" should be displayed on the webUI
