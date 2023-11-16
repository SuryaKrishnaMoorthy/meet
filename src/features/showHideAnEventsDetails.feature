Feature: Show/Hide Event Details.
  Scenario: An event element is collapse by default
    Given the main page is open
    And the events are shown;
    When the user has not clicked any button on the event,
    Then they should be able to see Show button on the event
    And event should be collapsed.
  Scenario: User can expand an event to see details
    Given an event is collapsed
    And show button is visible
    When the user clicks on the show button
    Then the event should expand to show more information
    And less button should replace the show button
  Scenario: User can collapse an event to hide details
    Given an event is expanded
    And less button is visible
    When the user clicks on the less button
    Then the event should collapse to show less information
    And show button should replace the less button