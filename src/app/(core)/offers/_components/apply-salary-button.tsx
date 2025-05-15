'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useSalaryInputs } from '@/store/salary-inputs';
import { Button } from '@/components/ui/button';

export default function ApplySalaryButton() {
	const { salaryMin, salaryMax } = useSalaryInputs();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	function handleApplySalaryFilters() {
		const params = new URLSearchParams(searchParams.toString());

		if (salaryMin) {
			params.set('salary-min', salaryMin.toString());
		} else {
			params.delete('salary-min');
		}

		if (salaryMax) {
			params.set('salary-max', salaryMax.toString());
		} else {
			params.delete('salary-max');
		}

		router.push(`${pathname}?${params}`);
	}

	return (
		<Button
			onClick={handleApplySalaryFilters}
			className="w-full not-disabled:cursor-pointer"
		>
			Apply
		</Button>
	);
}
