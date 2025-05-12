'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function ClearFiltersButton() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	const [isEnabled, setIsEnabled] = useState<boolean>(false);

	useEffect(() => {
		const params = searchParams.toString();
		setIsEnabled(params.length > 0);
	}, [searchParams]);

	return (
		<button
			disabled={!isEnabled}
			onClick={() => router.push(pathname)}
			className="text-sm text-secondary-foreground not-disabled:hover:text-foreground/75 transition-colors not-disabled:cursor-pointer tracking-tight"
		>
			Clear
		</button>
	);
}
