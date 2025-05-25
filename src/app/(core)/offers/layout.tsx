import FiltersHeader from './_components/filters-header';
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
	return (
		<main className="flex flex-1">
			{filters}
			<div className="flex-1 overflow-hidden">
				<FiltersHeader />
				<div className="flex">
					{children}
					{details}
				</div>
			</div>
		</main>
	);
}
