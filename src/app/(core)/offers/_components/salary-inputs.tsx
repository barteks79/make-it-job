'use client';

import { useSalaryInputs } from '@/store/salary-inputs';
import { Input } from '@/components/ui/input';

export default function SalaryInputs() {
	const { salaryMax, salaryMin, setSalaryMax, setSalaryMin } =
		useSalaryInputs();

	return (
		<div className="flex flex-col items-center gap-2.5">
			<Input
				value={salaryMin}
				onChange={value => setSalaryMin(+value)}
				placeholder="$0"
				type="number"
			/>

			<Input
				value={salaryMax}
				onChange={value => setSalaryMax(+value)}
				placeholder="$50000"
				type="number"
			/>
		</div>
	);
}
