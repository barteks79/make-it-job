import {
	useState,
	useContext,
	createContext,
	type PropsWithChildren
} from 'react';

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
	toggleJobTag: (tag: JobTags) => void;
	search: undefined | string;
	location: undefined | string;
};

const QuickFiltersContext = createContext<TQuickFiltersContext>({
	activeJobTags: [],
	toggleJobTag: () => {},
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
	const [activeJobTags, setActiveJobTags] = useState<JobTags[]>([]);

	function toggleJobTag(tag: JobTags) {
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
				search: undefined,
				location: undefined
			}}
		>
			{children}
		</QuickFiltersContext.Provider>
	);
}
