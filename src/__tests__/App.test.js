import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("<App /> Component", () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });

  test("render list of events", () => {
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });

  test("should render city serach", () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });
});
