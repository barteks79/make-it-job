import SortingSelect from './_components/sorting-select';
import JobPostCard from './_components/job-post-card';

export default function JobPosts() {
	return (
		<section className="flex flex-col flex-1 px-7 py-4 gap-3 md:gap-5">
			<div className="flex justify-between items-center">
				<p className="text-sm md:text-base text-muted-foreground">
					Showing <span className="text-foreground font-semibold">5</span>{' '}
					jobs in total
				</p>

				<SortingSelect />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				<JobPostCard />
				<JobPostCard />
				<JobPostCard />
			</div>
		</section>
	);
}
