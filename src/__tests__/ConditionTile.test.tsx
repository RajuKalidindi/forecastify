import React from "react";
import { render } from "@testing-library/react";
import ConditionTile from "../components/ConditionTile";
import { TileData } from "../types/types";

describe("ConditionTile", () => {
	it("renders correctly with given props", () => {
		const mockProps: TileData = {
			title: "Temperature",
			value: "25",
			units: "°C",
			icon: (
				<span role="img" aria-label="thermometer">
					🌡️
				</span>
			),
		};

		const { getByText } = render(<ConditionTile {...mockProps} />);

		expect(getByText(mockProps.title)).toBeInTheDocument();

		expect(
			getByText(`${mockProps.value} ${mockProps.units}`)
		).toBeInTheDocument();

		expect(getByText(mockProps.title).previousSibling).toBeInTheDocument();
	});
});
