import { MenuIcon } from 'lucide-react';
import NavItem from '@/components/custom/nav-item';

import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
	DrawerTitle
} from '@/components/ui/drawer';

export default function MobileNav() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<button className="grid place-content-center size-8 cursor-pointer">
					<MenuIcon />
				</button>
			</DrawerTrigger>

			<DrawerContent className="flex flex-col gap-3 p-4">
				<NavItem href="/">Home</NavItem>
				<DrawerTitle className="text-xl">Jobs</DrawerTitle>
				<DrawerTitle className="text-xl">User</DrawerTitle>
			</DrawerContent>
		</Drawer>
	);
}
