import type { Metadata } from 'next';

type LayoutPages = 'root';

export const LAYOUT_METADATA: Record<LayoutPages, Metadata> = {
	root: {
		title: 'Make IT Job',
		description:
			'MakeITJob is a web application that helps IT professionals find personalized job offers quickly and efficiently.'
	}
};
