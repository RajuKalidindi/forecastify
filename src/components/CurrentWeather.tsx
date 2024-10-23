import { WeatherData } from "../types/types";
import ConditionTile from "./ConditionTile";
import {
	convertUnixToLocalTime,
	convertMeterToKilometer,
} from "../utils/Helpers";
import {
	WbTwilight,
	Thermostat,
	Air,
	Speed,
	WaterDrop,
	Visibility,
} from "@mui/icons-material";

interface CurrentWeatherProps {
	data: WeatherData;
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
	const { name, sys, main, weather, wind, visibility } = data;

	const conditionTiles = [
		{
			id: 1,
			title: "Sunrise",
			value: convertUnixToLocalTime(sys.sunrise, data.timezone),
			units: "",
			icon: <WbTwilight />,
		},
		{
			id: 2,
			title: "Sunset",
			value: convertUnixToLocalTime(sys.sunset, data.timezone),
			units: "",
			icon: <WbTwilight />,
		},
		{
			id: 3,
			title: "Feels Like",
			value: Math.round(main.feels_like),
			units: "°C",
			icon: <Thermostat />,
		},
		{
			id: 4,
			title: "Wind",
			value: Math.round(wind.speed),
			units: "km/h",
			icon: <Air />,
		},
		{
			id: 5,
			title: "Humidity",
			value: main.humidity,
			units: "%",
			icon: <WaterDrop />,
		},
		{
			id: 6,
			title: "Pressure",
			value: main.pressure,
			units: "hPa",
			icon: <Speed />,
		},
		{
			id: 7,
			title: "Visibility",
			value: convertMeterToKilometer(visibility),
			units: "km",
			icon: <Visibility />,
		},
	];

	return (
		<div className="p-6">
			<div className="flex justify-between items-start">
				<div className="mt-8">
					<h1 className="text-4xl font-bold text-white">
						{name},{" "}
						<span className="text-gray-400 ">{sys.country}</span>
					</h1>
					<div className="text-6xl font-bold text-white mt-6">
						{Math.round(main.temp)}°C
					</div>
				</div>
				<div className="text-8xl">
					<img
						src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt={data.weather[0].main}
					/>
					<div className="text-white mt-2 text-4xl font-bold">
						{weather[0].main}
					</div>
				</div>
			</div>

			<div className="mt-12">
				<h2 className="text-gray-400 mb-4">Weather Conditions</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{conditionTiles.map((tile) => (
						<ConditionTile
							key={tile.id}
							title={tile.title}
							value={tile.value}
							units={tile.units}
							icon={tile.icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
