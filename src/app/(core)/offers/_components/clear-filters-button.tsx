'use client';

import { useSalaryInputs } from '@/store/salary-inputs';
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function ClearFiltersButton() {
	const { setSalaryMin, setSalaryMax } = useSalaryInputs();
	const [isEnabled, setIsEnabled] = useState<boolean>(false);

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const params = searchParams.toString();
		setIsEnabled(params.length > 0);
	}, [searchParams]);

	function handleClearFilters() {
		setSalaryMin(undefined);
		setSalaryMax(undefined);
		router.push(`${pathname}`);
	}

	return (
		<button
			disabled={!isEnabled}
			onClick={handleClearFilters}
			className="text-sm text-secondary-foreground not-disabled:hover:text-foreground/75 transition-colors not-disabled:cursor-pointer tracking-tight"
		>
			Clear
		</button>
	);
}
