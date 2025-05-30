'use client';

import {
	useState,
	useContext,
	createContext,
	type PropsWithChildren
} from 'react';

export type JobTag =
	| 'UI Designer'
	| 'Frontend Developer'
	| 'DevOps Engineer'
	| 'Data Scientist'
	| 'Software Enginner'
	| 'Backend Developer'
	| 'Cloud Engineer';

type TQuickFiltersContext = {
	activeJobTags: JobTag[];
	toggleJobTag: (tag: JobTag) => void;
	search: undefined | string;
	setSearch: (newSearch: string | undefined) => void;
	location: undefined | string;
	setLocation: (newSearch: string | undefined) => void;
};

const QuickFiltersContext = createContext<TQuickFiltersContext>({
	activeJobTags: [],
	toggleJobTag: () => {},
	search: undefined,
	setSearch: () => {},
	location: undefined,
	setLocation: () => {}
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
	const [activeJobTags, setActiveJobTags] = useState<JobTag[]>([]);
	const [search, setSearch] = useState<string | undefined>(undefined);
	const [location, setLocation] = useState<string | undefined>(undefined);

	function toggleJobTag(tag: JobTag) {
		setActiveJobTags(prev => {
			if (prev.includes(tag)) {
				return prev.filter(t => t !== tag);
			} else {
				return [...prev, tag];
			}
		});
	}

	return (
		<QuickFiltersContext.Provider
			value={{
				activeJobTags,
				toggleJobTag,
				search,
				setSearch,
				location,
				setLocation
			}}
		>
			{children}
		</QuickFiltersContext.Provider>
	);
}
