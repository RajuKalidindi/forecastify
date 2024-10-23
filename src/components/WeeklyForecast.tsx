import { ForecastDataArray } from "../types/types";
import ForecastTile from "./ForecastTile";

interface WeeklyForecastProps {
	data: ForecastDataArray | null;
}

const WeeklyForecast = ({ data }: WeeklyForecastProps) => {
	return (
		<div className="p-6 flex justify-center">
			<div className="space-y-2 w-full max-w-xl">
				{data?.map((day) => (
					<ForecastTile
						key={day.dt}
						dt={day.dt}
						main={day.main}
						weather={day.weather}
					/>
				))}
			</div>
		</div>
	);
};

export default WeeklyForecast;
