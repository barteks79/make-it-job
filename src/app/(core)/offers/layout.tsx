import FilterSidebar from './_components/filter-sidebar';
import { type ReactNode } from 'react';

export default function OffersLayout({
	children,
	details
}: {
	children: ReactNode;
	details: ReactNode;
}) {
	return (
		<>
			<FilterSidebar />
		</>
	);
}
