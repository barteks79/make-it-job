import { type JobPost } from '@/types/job-post';

export const MOCK_JOB_POSTS: JobPost[] = [
	{
		date: new Date('2025-05-30'),
		isBookmarked: false,
		image: '/images/netflix.jpg',
		title: 'Frontend Developer',
		company: 'Netflix',
		experience: 'Senior',
		salary: 120000,
		type: 'Full time',
		description:
			'Build stunning, interactive interfaces that redefine the streaming experience for millions.',
		tags: [
			'WebDevelopment',
			'ResponsiveDesign',
			'React',
			'Typescript',
			'Remote'
		]
	},
	{
		date: new Date('2025-05-25'),
		isBookmarked: false,
		image: '/images/meta.jpg',
		title: 'Cloud Engineer',
		company: 'Meta',
		experience: 'Senior',
		salary: 110000,
		type: 'Full time',
		description:
			"Design and optimize scalable cloud infrastructure to support billions of users across Meta's ecosystem.",
		tags: ['CloudComputing', 'AWS', 'DevOps', 'Kubernetes', 'Hybrid']
	},
	{
		date: new Date('2025-05-28'),
		isBookmarked: false,
		image: '/images/uber.jpg',
		title: 'UI Designer',
		company: 'Uber',
		experience: 'Mid',
		salary: 92000,
		type: 'Part-time',
		description:
			'Create intuitive and visually compelling interfaces that enhance the Uber experience for millions of users.',
		tags: ['UIDesign', 'DesignSystems', 'Figma', 'Prototyping', 'Hybrid']
	},
	{
		date: new Date('2025-05-20'),
		isBookmarked: false,
		image: '/images/google.jpg',
		title: 'Software Enginner',
		company: 'Google',
		experience: 'Junior',
		salary: 90000,
		type: 'Full time',
		description:
			"Develop scalable and innovative software solutions that power Google's products and services worldwide.",
		tags: [
			'SoftwareEngineering',
			'Python',
			'Java',
			'DistributedSystems',
			'Hybrid'
		]
	},
	{
		date: new Date('2025-05-31'),
		isBookmarked: false,
		image: '/images/amazon.jpg',
		title: 'Frontend Developer',
		company: 'Amazon',
		experience: 'Junior',
		salary: 40000,
		type: 'Internship',
		description:
			"Develop interactive web interfaces, enhance user experiences, and contribute to Amazon's ecosystem.",
		tags: [
			'Frontend',
			'React',
			'Javascript',
			'UX/UI',
			'Internship',
			'Remote'
		]
	}
];
