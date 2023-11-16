import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} currentNOE={"32"} />
    );
  });

  test("should render a textbox to enter the number of events", () => {
    const textBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(textBox).toBeInTheDocument();
  });

  test("should render a textbox with default value as 32", () => {
    const textBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(textBox.value).toBe("32");
  });

  test("should change the value of the texbox when user types in", async () => {
    const user = userEvent.setup();

    const textBox = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(textBox, "{backspace}{backspace}10");
    expect(textBox.value).toBe("10");
  });
});

describe("<NumberOfEvents /> integration", () => {
  test("should render the number of events inputted by the user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
    const numberOfEventsTextBox =
      within(NumberOfEventsDOM).queryByRole("textbox");

    await user.type(numberOfEventsTextBox, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderEventItems = within(EventListDOM).queryAllByRole("listitem");

    expect(allRenderEventItems.length).toEqual(10);
  });
});
