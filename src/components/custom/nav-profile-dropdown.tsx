import { Button } from '@/components/ui/button';
import DropdownLink from '@/components/custom/dropdown-link';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem
} from '@/components/ui/dropdown-menu';

import {
	BriefcaseBusinessIcon,
	InboxIcon,
	UserIcon,
	SettingsIcon,
	LogOutIcon
} from 'lucide-react';

import {
	Avatar,
	AvatarImage,
	AvatarFallback
} from '@/components/ui/avatar';

export default function NavProfileDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="size-8">
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="min-w-60" align="end" sideOffset={6}>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar className="size-10 rounded-lg">
							<AvatarImage
								className="object-cover object-center"
								src="/images/user-default1.jpg"
							/>
							<AvatarFallback className="rounded-lg">
								Profile picture
							</AvatarFallback>
						</Avatar>

						<div className="grid flex-1 text-sm">
							<span className="truncate font-semibold">Username</span>
							<span className="truncate text-foreground/80">
								user@example.com
							</span>
						</div>
					</div>
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownLink href="/applications">
						<BriefcaseBusinessIcon />
						Applications
					</DropdownLink>

					<DropdownLink href="/inbox">
						<InboxIcon />
						Inbox
					</DropdownLink>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownLink href="/profile">
						<UserIcon />
						Profile
					</DropdownLink>

					<DropdownLink href="/settings">
						<SettingsIcon />
						Settings
					</DropdownLink>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem>
					<LogOutIcon />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
