import axios from "axios";
import { ForecastData } from "../types/types";
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeatherData = async (city: string) => {
	try {
		const weatherResponse = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
		);
		return weatherResponse.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(
				`Failed to fetch weather data: ${
					error.response?.data?.message || error.message
				}`
			);
		} else {
			throw new Error("Failed to fetch weather data: " + error);
		}
	}
};

export const fetchForecastData = async (city: string) => {
	try {
		const forecastResponse = await axios.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
		);
		const filteredEntries = forecastResponse.data.list.filter(
			(entry: ForecastData) => entry.dt_txt?.endsWith("12:00:00")
		);
		return filteredEntries;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(
				`Failed to fetch weather data: ${
					error.response?.data?.message || error.message
				}`
			);
		} else {
			throw new Error("Failed to fetch weather data: " + error);
		}
	}
};
