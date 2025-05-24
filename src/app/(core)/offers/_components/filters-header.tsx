import PositionTag from './position-tag';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function FiltersHeader() {
	return (
		<header className="flex flex-col justify-center gap-2 px-7 py-4 bg-secondary border-b">
			<div className="flex gap-3">
				<Input placeholder="Search job" className="flex-1 bg-background" />

				<Input
					placeholder="Search location"
					className="flex-1 bg-background"
				/>
			</div>

			<ul className="flex items-center gap-3">
				<li>
					<PositionTag tag="ui-designer" isActive={false}>
						UI Designer
					</PositionTag>
				</li>

				<li>
					<PositionTag tag="frontend-developer" isActive={true}>
						Frontend Developer
					</PositionTag>
				</li>
			</ul>
		</header>
	);
}
