import { Button } from '@/components/ui/button';
import { ChevronsUpDownIcon } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function NavProfileDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="h-8">
					<span>noahw_</span>
					<ChevronsUpDownIcon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent></DropdownMenuContent>
		</DropdownMenu>
	);
}
