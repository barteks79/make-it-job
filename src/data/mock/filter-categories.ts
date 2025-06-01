import { type CategoryFilterOption } from '@/types/sidebar-filters';

export const MOCK_FILTER_CATEGORIES: Record<
	string,
	CategoryFilterOption[]
> = {
	jobType: [
		{
			isChecked: false,
			name: 'Full time',
			quantity: 23
		},
		{
			isChecked: false,
			name: 'Part-time',
			quantity: 10
		},
		{
			isChecked: false,
			name: 'Freelance',
			quantity: 7
		},
		{
			isChecked: false,
			name: 'Internship',
			quantity: 2
		}
	],
	workType: [
		{
			isChecked: false,
			name: 'On-site',
			quantity: 58
		},
		{
			isChecked: false,
			name: 'Hybrid',
			quantity: 7
		},
		{
			isChecked: false,
			name: 'Remote',
			quantity: 29
		}
	],
	experience: [
		{
			isChecked: false,
			name: 'Senior',
			quantity: 66
		},
		{
			isChecked: false,
			name: 'Mid/Regular',
			quantity: 31
		},
		{
			isChecked: false,
			name: 'Junior',
			quantity: 15
		}
	]
};
