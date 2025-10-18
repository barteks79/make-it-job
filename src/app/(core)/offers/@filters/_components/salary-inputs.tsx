'use client';

import { useSalaryInputs } from '@/store/salary-inputs';
import { Input } from '@/components/ui/input';

export function SalaryInputs() {
	const { salaryMax, salaryMin, setSalaryMax, setSalaryMin } =
		useSalaryInputs();

	return (
		<div className="flex flex-col items-center gap-2.5">
			<Input
				value={salaryMin ?? ''}
				placeholder="$0"
				type="number"
				onChange={e => {
					const value = +e.target.value;
					setSalaryMin(value <= 0 ? undefined : +value);
				}}
			/>

			<Input
				value={salaryMax ?? ''}
				placeholder="$50000"
				type="number"
				onChange={e => {
					const value = +e.target.value;
					setSalaryMax(value <= 0 ? undefined : +value);
				}}
			/>
		</div>
	);
}
