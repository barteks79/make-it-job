import { type ReactNode } from 'react';

export default function OffersLayout({
	children,
	details,
	filters
}: {
	children: ReactNode;
	details: ReactNode;
	filters: ReactNode;
}) {
	return <>{filters}</>;
}
