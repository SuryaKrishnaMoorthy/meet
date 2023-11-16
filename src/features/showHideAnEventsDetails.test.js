import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapse by default", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    and("the events are shown;", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    when("the user has not clicked any button on the event,", () => {});

    then("they should be able to see Show button on the event", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach((Event) => {
          expect(Event.querySelector(".show-details")).toBeInTheDocument();
        });
      });
    });

    and("event should be collapsed.", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach((Event) => {
          expect(Event.querySelector(".details")).not.toBeInTheDocument();
        });
      });
    });
  });

  test("User can expand an event to see details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent, AppDOM, EventListDOM;

    given("an event is collapsed", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach((Event) => {
          expect(Event.querySelector(".details")).not.toBeInTheDocument();
        });
      });
    });

    and("show button is visible", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach((Event) => {
          expect(Event.querySelector(".show-details")).toBeInTheDocument();
        });
      });
    });

    when("the user clicks on the show button", async () => {
      const user = userEvent.setup();
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach(async (Event) => {
          const ShowButton = within(Event).querySelector(".show-details");
          await user.click(ShowButton);
          expect(Event.querySelector(".details")).toBeInTheDocument();
        });
      });
    });

    then("the event should expand to show more information", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach((Event) => {
          expect(Event.querySelector(".details")).toBeInTheDocument();
        });
      });
    });

    and("less button should replace the show button", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach((Event) => {
          expect(Event.querySelector(".hide-details")).toBeInTheDocument();
        });
      });
    });
  });

  test("User can collapse an event to hide details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent, AppDOM, EventListDOM;
    const user = userEvent.setup();
    given("an event is expanded", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach(async (Event) => {
          const ShowButton = within(Event).querySelector(".show-details");
          await user.click(ShowButton);
          expect(Event.querySelector(".details")).toBeInTheDocument();
        });
      });
    });

    and("less button is visible", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach(async (Event) => {
          expect(Event.querySelector(".hide-details")).toBeInTheDocument();
        });
      });
    });

    when("the user clicks on the less button", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach(async (Event) => {
          const HideButton = Event.querySelector(".hide-details");
          await user.click(HideButton);
        });
      });
    });

    then("the event should collapse to show less information", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach((Event) => {
          expect(Event.querySelector(".details")).not.toBeInTheDocument();
        });
      });
    });

    and("show button should replace the less button", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        EventListItems.forEach(async (Event) => {
          const HideButton = Event.querySelector(".hide-details");
          const ShowButton = Event.querySelector(".show-details");
          expect(HideButton).not.toBeInTheDocument();
          expect(ShowButton).toBeInTheDocument();
        });
      });
    });
  });
});
