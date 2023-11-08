import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
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
