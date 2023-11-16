Feature: Specify Number of Events.
  Scenario: When the user hasn’t specified a number, 32 events are shown by default
    Given the main page is open
    When the user has made no changes to the textbox
    Then the user can see 32 number of events in the main page.
  Scenario: User can change the number of events displayed
    Given the main page is open
    When the user changes the number of events
    Then the user should see that many events on the page.