export default function FilterSidebar() {
	return (
		<aside className="flex-1 bg-secondary w-64 border-x">
			<section className="flex justify-between items-center px-7 py-4 border-b">
				<h3 className="text-foreground font-semibold tracking-tight">
					Filters
				</h3>

				<button className="text-sm text-secondary-foreground cursor-pointer tracking-tight">
					Clear
				</button>
			</section>
		</aside>
	);
}
