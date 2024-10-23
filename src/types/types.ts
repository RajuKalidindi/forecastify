import { ReactNode } from "react";

export interface CityType {
	id: number;
	name: string;
	country: string;
}

export interface WeatherData {
	name: string;
	dt: number;
	main: {
		temp: number;
		feels_like: number;
		humidity: number;
		pressure: number;
	};
	sys: {
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	visibility: number;
	weather: {
		main: string;
		description: string;
		icon: string;
	}[];
	wind: {
		speed: number;
	};
}

export interface ForecastData {
	dt: number;
	main: {
		temp: number;
	};
	weather: {
		main: string;
		icon: string;
	}[];
	dt_txt?: string;
}

export type ForecastDataArray = ForecastData[];

export interface TileData {
	icon?: ReactNode;
	title: string;
	value: string | number;
	units: string;
}

export type ViewType = "current" | "forecast";
