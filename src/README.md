# Meet

## About the project

- An application to connect  through meetups in various cities.

## Features

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.


## Scenarios

● Filter Events by City. 

	- Scenario 1: When the user hasn't searched for a specific city, show upcoming events in all cities.
		
		GIVEN the user hasn’t searched for any city,
		WHEN the user opens the app;
		THEN the user should see a list of upcoming events

	- Scenario 2: User should see a list of suggestions wen they search for a city
		
		GIVEN the main page is open;
		WHEN the user starts typing in the city textbox;
		THEN the user should receive a list of cities(suggestions) that match what they've typed.
		
	- Scenario 3: User can select a city from the suggested list
		
		GIVEN the user was typing Berlin in the city textbox AND the list of suggested      cities is showing;
		WHEN the user selects a city(eg: Berlin, Germany) from the list;
		THEN their city should be changed to that city (ie Berlin, Germany) AND the user should receive a list of upcoming events in that city


● Feature: Show/Hide Event Details. 

	Scenario 1: An event element is collapse by default
	
		GIVEN the main page is open 
		AND the events are shown;
		WHEN the user has not clicked any button on the event,
		THEN they should be able to see Show button on the event
		AND event should be collapsed.
		
	Scenario 2: User can expand an event to see details
	
		GIVEN an event is collapsed
		AND Show button is visible
		WHEN the user clicks on the "Show" button
		THEN the event should expand to show more information 
		AND "Less" button should replace the "Show" button
	
	Scenario 2: User can collapse an event to hide details
		
		GIVEN an event is expanded
		AND Less button is visible
		WHEN the user clicks on the "Less" button
		THEN the event should collapse to show less information 
		AND "Show" button should replace the "Less" button
		
	
		
● Feature: Specify Number of Events.
		
	Scenario 1: When the user hasn’t specified a number, 32 events are shown by default
		
		GIVEN the main page is open
		WHEN the user has made no changes to the textbox
		THEN the user can see 32 number of events in the main page.
		
	Scenario 2: User can change the number of events displayed
		
		GIVEN the main page is open
		WHEN the user changes the number of events
		THEN the user should see that many events on the page.
		
● Feature:  Use the App When Offline. 
	
	Scenario 1: Show cached data when there's no internet connection
		
		GIVEN the user is offline;
		WHEN the user opens the main page;
		THEN the user should receive the list of events viewed when the user was online the last time.
		
	Scenario 2: Show error when user changes search settings (city, number of events)
		
		GIVEN the user is offline;
		WHEN the user make changes to textbox like city, number of events;
		THEN the user should see an error message.
		
		
● Feature:  Add an App Shortcut to the Home Screen. 

	Scenario 1: User can install the meet app as a shortcut on their device home screen
	
	GIVEN the user is outside the app;
	WHEN user clicks on the app icon on the home screen;
	THEN the user should be able to open the app.
	
● Feature: Display Charts Visualizing Event Details

	Scenario 1: Show a chart with the number of upcoming events in each city
	
	GIVEN data visualization is visible;
	WHEN the user clicks on charts button;
	THEN the user should see a chart showing the upcoming events in each city so that I know what events are organized in which city
	
