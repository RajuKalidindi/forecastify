import { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData, ForecastDataArray, CityType } from "../types/types";
import { fetchWeatherData, fetchForecastData } from "../utils/Api";
import CurrentWeather from "./CurrentWeather";
import WeeklyForecast from "./WeeklyForecast";

const Dashboard = () => {
	const [city, setCity] = useState("");
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [forecastData, setForecastData] = useState<ForecastDataArray | null>(
		null
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [activeView, setActiveView] = useState<"current" | "weekly">(
		"current"
	);
	const [cities, setCities] = useState<CityType[]>([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = async (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = e.target.value;
		setInputValue(value);

		if (value.length > 2) {
			const response = await axios.get(
				`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${
					import.meta.env.VITE_API_KEY
				}`
			);
			const data = response.data;
			setCities(data);
		} else {
			setCities([]);
		}
	};

	useEffect(() => {
		const getCurrentWeatherData = async () => {
			setLoading(true);
			setError(null);
			try {
				const data = await fetchWeatherData(city);
				setWeatherData(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "An error occurred"
				);
			} finally {
				setLoading(false);
			}
		};
		const getForecastWeatherData = async () => {
			try {
				const data = await fetchForecastData(city);
				setForecastData(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "An error occurred"
				);
			}
		};

		if (city) {
			getCurrentWeatherData();
			getForecastWeatherData();
		}
	}, [city]);

	const ToggleButton = () => (
		<div className="flex justify-center gap-2 mb-6 lg:hidden">
			<button
				onClick={() => setActiveView("current")}
				className={`px-4 py-2 rounded-lg transition-colors ${
					activeView === "current"
						? "bg-blue-500 text-white"
						: "bg-gray-800 text-gray-300 hover:bg-gray-700"
				}`}
			>
				Current Weather
			</button>
			<button
				onClick={() => setActiveView("weekly")}
				className={`px-4 py-2 rounded-lg transition-colors ${
					activeView === "weekly"
						? "bg-blue-500 text-white"
						: "bg-gray-800 text-gray-300 hover:bg-gray-700"
				}`}
			>
				5-Day Forecast
			</button>
		</div>
	);

	return (
		<div className="flex h-screen w-screen bg-gray-900">
			<main className="flex-1 overflow-auto">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-white text-center mt-4">
						Forecastify
					</h2>
					<div className="flex items-center justify-center h-full p-6">
						<div className="relative w-1/2">
							<input
								type="text"
								placeholder="Search for city"
								className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								onChange={handleInputChange}
								value={inputValue}
							/>
							{cities.length > 0 && (
								<ul className="absolute bg-gray-800 text-white w-full rounded-lg">
									{cities.map((city) => (
										<li
											key={city.id}
											className="px-4 py-2 hover:bg-blue-500 cursor-pointer"
											onClick={() => {
												setCity(
													`${city.name}, ${city.country}`
												);
												setInputValue("");
												setCities([]);
											}}
										>
											{city.name}, {city.country}
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
					{loading && (
						<div className="text-white text-center">Loading...</div>
					)}
					{error && (
						<div className="text-red-500 text-center">{error}</div>
					)}
					{!city && (
						<div className="text-white text-center">
							Please enter a city name
						</div>
					)}
					{weatherData && (
						<>
							<ToggleButton />
							<div className="hidden lg:grid lg:grid-cols-[70%_30%] lg:gap-6 lg:px-6">
								<div className="lg:block">
									<CurrentWeather data={weatherData} />
								</div>
								<div className="lg:block">
									<WeeklyForecast data={forecastData} />
								</div>
							</div>

							<div className="lg:hidden">
								{activeView === "current" ? (
									<CurrentWeather data={weatherData} />
								) : (
									<WeeklyForecast data={forecastData} />
								)}
							</div>
						</>
					)}
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
