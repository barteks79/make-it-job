import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function createFilterQuery(
	searchParams: URLSearchParams,
	name: string
) {
	const newUrl = new URLSearchParams(searchParams);

	if (newUrl.has(name)) {
		newUrl.delete(name);
	} else {
		newUrl.set(name, 'true');
	}

	return newUrl.toString();
}
