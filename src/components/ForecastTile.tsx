import { getDayName } from "../utils/Helpers";
import { ForecastData } from "../types/types";

const ForecastTile = ({ dt, main, weather }: ForecastData) => {
	return (
		<div className="flex flex-row items-center bg-gray-800 px-6 py-0 rounded-lg shadow-lg w-full space-x-2 justify-between">
			<div className="text-white font-semibold text-lg">
				{getDayName(dt)}
			</div>
			<div className="text-4xl">
				<img
					src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
					alt={weather[0].main}
				/>
			</div>
			<div className="text-white font-bold ">{weather[0].main}</div>
			<div className="text-white font-bold text-2xl">
				{Math.round(main.temp)}°C
			</div>
		</div>
	);
};
export default ForecastTile;
