import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function createFilterQuery(
	searchParams: URLSearchParams,
	name: string,
	value?: string
) {
	const newUrl = new URLSearchParams(searchParams);

	if (newUrl.has(name) && !value) {
		newUrl.delete(name);
	} else {
		newUrl.set(name, value ?? 'true');
	}

	return newUrl.toString();
}
