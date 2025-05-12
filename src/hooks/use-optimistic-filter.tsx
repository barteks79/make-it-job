'use client';

import { useOptimistic, startTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { createFilterQuery } from '@/lib/utils';

export default function useOptimisticFilter<T extends string | boolean>(
	paramName: string,
	defaultValue: T
) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [optimisticValue, setOptimisticValue] = useOptimistic<T, T>(
		(searchParams.get(paramName) as T) ?? defaultValue,
		(_, newValue) => newValue
	);

	function setValue(newValue: T) {
		startTransition(() => setOptimisticValue(newValue));

		const newUrl = createFilterQuery(
			searchParams,
			paramName,
			typeof newValue === 'boolean'
				? newValue
					? 'true'
					: undefined
				: newValue
		);

		router.push(`${pathname}?${newUrl}`);
	}

	return [optimisticValue, setValue] as const;
}
