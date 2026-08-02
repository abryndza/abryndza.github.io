const CREATION_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
	day: "numeric",
	month: "short",
	year: "numeric",
	timeZone: "UTC",
});

export const formatCreationDate = (creationDate: string): string => {
	const match = CREATION_DATE_PATTERN.exec(creationDate);

	if (!match) {
		return creationDate;
	}

	const [, year, month, day] = match;
	const utcDate = new Date(
		Date.UTC(Number(year), Number(month) - 1, Number(day)),
	);

	return dateFormatter.format(utcDate);
};
