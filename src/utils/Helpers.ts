export const convertMeterToKilometer = (meters: number) => {
	return meters / 1000;
};

export const convertUnixToLocalTime = (
	unixTime: number,
	timezoneOffset: number
) => {
	const utcDate = new Date((unixTime + timezoneOffset) * 1000);
	const hours = utcDate.getUTCHours() % 12 || 12;
	const minutes = utcDate.getUTCMinutes().toString().padStart(2, "0");
	const ampm = utcDate.getUTCHours() >= 12 ? "PM" : "AM";
	return `${hours}:${minutes} ${ampm}`;
};

export const getDayName = (dt: number) => {
	return new Date(dt * 1000).toLocaleDateString("en-US", {
		weekday: "short",
	});
};
