import { type FilterCategoriesT } from '@/db/queries/posts/get-filter-categories';

export const fallbackCategories: Awaited<FilterCategoriesT> = {
  jobType: [
    {
      type: 'Full time',
      count: 0
    },
    {
      type: 'Part-time',
      count: 0
    },
    {
      type: 'Freelance',
      count: 0
    },
    {
      type: 'Internship',
      count: 0
    }
  ],
  workType: [
    {
      type: 'On-site',
      count: 0
    },
    {
      type: 'Remote',
      count: 0
    },
    {
      type: 'Hybrid',
      count: 0
    }
  ],
  experience: [
    {
      type: 'Junior',
      count: 0
    },
    {
      type: 'Mid',
      count: 0
    },
    {
      type: 'Senior',
      count: 0
    }
  ]
};
