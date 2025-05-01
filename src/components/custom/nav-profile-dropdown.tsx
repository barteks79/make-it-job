import { Button } from '@/components/ui/button';
import { ChevronsUpDownIcon } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuLabel
} from '@/components/ui/dropdown-menu';

import {
	Avatar,
	AvatarImage,
	AvatarFallback
} from '@/components/ui/avatar';

export default function NavProfileDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="h-8 gap-6">
					<span>noahw_</span>
					<ChevronsUpDownIcon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="min-w-60" align="end" sideOffset={6}>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar className="w-10 h-10 rounded-lg">
							<AvatarImage
								className="object-cover object-center"
								src="/mock-profile-picture.jpg"
							/>
							<AvatarFallback className="rounded-lg">
								Profile picture
							</AvatarFallback>
						</Avatar>

						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-semibold">Noah Williams</span>
							<span className="truncate text-xs">
								noah.williams@gmail.com
							</span>
						</div>
					</div>
				</DropdownMenuLabel>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
