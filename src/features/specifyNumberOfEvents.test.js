import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When the user hasn’t specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the user has made no changes to the textbox", () => {});

    then(
      /^the user can see (\d+) number of events in the main page.$/,
      (arg0) => {
        const AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
        const NumberOfEventsInput =
          within(NumberOfEventsDOM).queryByRole("textbox");

        expect(NumberOfEventsInput.value).toBe("32");
      }
    );
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the user changes the number of events", async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
      const NumberOfEventsInput =
        within(NumberOfEventsDOM).queryByRole("textbox");
      await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
    });

    then("the user should see that many events on the page.", () => {
      const AppDOM = AppComponent.container.firstChild;

      const EventListDOM = AppDOM.querySelector("#event-list");
      const allRenderEventItems =
        within(EventListDOM).queryAllByRole("listitem");

      expect(allRenderEventItems.length).toEqual(10);
    });
  });
});
