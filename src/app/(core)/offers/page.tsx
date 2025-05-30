export default function JobPosts() {
	return (
		<section className="flex flex-col flex-1 px-7 py-4">
			<div className="flex justify-between items-center">
				<p className="text-sm text-muted-foreground">
					Showing <span className="text-foreground font-semibold">5</span>{' '}
					jobs in total
				</p>

				<p>Sorting</p>
			</div>
		</section>
	);
}
