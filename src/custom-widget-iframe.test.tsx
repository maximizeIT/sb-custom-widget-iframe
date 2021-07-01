import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetIframe} from "./custom-widget-iframe";

describe("CustomWidgetIframe", () => {
    it("should render the component", () => {
        render(<CustomWidgetIframe contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
