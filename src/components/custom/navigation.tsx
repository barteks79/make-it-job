import MobileNav from '@/components/custom/mobile-nav';
import { Button } from '@/components/ui/button';
import NavItem from '@/components/custom/nav-item';
import NavProfileDropdown from '@/components/custom/nav-profile-dropdown';
import Logo from '@/components/custom/logo';
import { Inbox, Plus } from 'lucide-react';

export default function Navigation() {
	return (
		<nav className="flex justify-between items-center border-b px-3 md:px-8 h-14">
			<div className="flex items-center gap-4 md:gap-8">
				<div className="md:hidden">
					<MobileNav />
				</div>

				<Logo />

				<ul className="hidden md:flex md:items-center gap-6 text-sm">
					<NavItem href="/dashboard">Dashboard</NavItem>
					<NavItem href="/offers">Offers</NavItem>
					<NavItem href="/bookmarks">Bookmarks</NavItem>
					<NavItem href="/pricing">Pricing</NavItem>
				</ul>
			</div>

			<ul className="flex items-center gap-2 md:gap-3">
				<Button className="size-8" variant="outline" size="icon">
					<Plus />
				</Button>

				<Button
					className="hidden md:inline-flex size-8"
					variant="outline"
					size="icon"
				>
					<Inbox />
				</Button>

				<NavProfileDropdown />
				{/* dropdown with users profile picture */}
			</ul>
		</nav>
	);
}
