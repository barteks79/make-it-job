import DateSelect from './date-select';

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

			<section className="flex flex-col px-7">
				<div className="flex flex-col gap-1.5 pt-4 pb-6 border-b">
					<label className="font-medium text-sm">Post date</label>
					<DateSelect />
				</div>
			</section>  
		</aside>
	);
}
