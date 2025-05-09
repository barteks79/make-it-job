import { type ReactNode } from 'react';

export default function CategoryFilter({
	children,
	isCustom = false
}: {
	children: ReactNode;
	isCustom?: boolean;
}) {
	return (
		<div className="flex flex-col gap-1.5 pt-4 pb-6 border-b last:border-none">
			{isCustom ? (
				children
			) : (
				<label className="font-medium text-sm">{children}</label>
			)}
		</div>
	);
}
