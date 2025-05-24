import { useContext, createContext, type PropsWithChildren } from 'react';

type JobTags =
	| 'UI Designer'
	| 'Frontend Developer'
	| 'DevOps Engineer'
	| 'Data Scientist'
	| 'Software Enginner'
	| 'Backend Developer'
	| 'Cloud Engineer';

type TQuickFiltersContext = {
	activeJobTags: JobTags[];
	search: undefined | string;
	location: undefined | string;
};

const QuickFiltersContext = createContext<TQuickFiltersContext>({
	activeJobTags: [],
	search: undefined,
	location: undefined
});

export function useQuickFilters() {
	const context = useContext(QuickFiltersContext);

	if (!context) {
		throw new Error(
			'useQuickFilters must be used within a QuickFiltersProvider'
		);
	}

	return context;
}

export default function QuickFiltersProvider({
	children
}: PropsWithChildren) {
	return (
		<QuickFiltersContext.Provider
			value={{
				activeJobTags: [],
				search: undefined,
				location: undefined
			}}
		>
			{children}
		</QuickFiltersContext.Provider>
	);
}
