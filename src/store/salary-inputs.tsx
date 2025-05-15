'use client';

import {
	useState,
	useContext,
	createContext,
	type PropsWithChildren
} from 'react';

import { useSearchParams } from 'next/navigation';

type SalaryInputsContextType = {
	salaryMin: number | undefined;
	setSalaryMin: (value: number | undefined) => void;
	salaryMax: number | undefined;
	setSalaryMax: (value: number | undefined) => void;
};

const SalaryInputsContext = createContext<
	SalaryInputsContextType | undefined
>(undefined);

export function useSalaryInputs() {
	const context = useContext(SalaryInputsContext);

	if (!context) {
		throw new Error(
			'useSalaryInputs must be used within a SalaryInputsProvider'
		);
	}

	return context;
}

export default function SalaryInputsProvider({
	children
}: PropsWithChildren) {
	const searchParams = useSearchParams();

	function getInitialValue(param: string) {
		const value = searchParams.get(param);
		const parsed = value !== null ? parseInt(value, 10) : undefined;
		return isNaN(parsed!) ? undefined : parsed;
	}

	const [salaryMin, setSalaryMin] = useState(
		getInitialValue('salary-min')
	);

	const [salaryMax, setSalaryMax] = useState(
		getInitialValue('salary-max')
	);

	return (
		<SalaryInputsContext.Provider
			value={{
				salaryMin,
				setSalaryMin,
				salaryMax,
				setSalaryMax
			}}
		>
			{children}
		</SalaryInputsContext.Provider>
	);
}
