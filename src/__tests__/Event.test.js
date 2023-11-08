import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event />", () => {
  let EventComponent, allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("should render event title", async () => {
    const eventTitle = EventComponent.container.querySelector(".summary");
    expect(eventTitle).toBeInTheDocument();
  });

  test("should render event creation time", async () => {
    const eventCreationTime =
      EventComponent.container.querySelector(".creation");
    expect(eventCreationTime).toBeInTheDocument();
  });

  test("should render event location", async () => {
    const eventLocation = EventComponent.container.querySelector(".location");
    expect(eventLocation).toBeInTheDocument();
  });

  test("should by default, event's details section should be hidden", () => {
    const eventDescription =
      EventComponent.container.querySelector(".description");
    expect(eventDescription).not.toBeInTheDocument();
  });

  test("should show the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const showDetailsButton =
      EventComponent.container.querySelector(".show-details");

    await user.click(showDetailsButton);

    const eventDescription =
      EventComponent.container.querySelector(".description");
    expect(eventDescription).toBeInTheDocument();
  });

  test("should hide the details sections when the user clicks on teh 'hide details' button", async () => {
    const user = userEvent.setup();
    const hideDetailsButton =
      EventComponent.container.querySelector(".hide-details");

    await user.click(hideDetailsButton);

    const eventDescription =
      EventComponent.container.querySelector(".description");
    expect(eventDescription).not.toBeInTheDocument();
  });
});
