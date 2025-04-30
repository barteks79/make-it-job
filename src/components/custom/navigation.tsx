import { Button } from '@/components/ui/button';
import NavItem from '@/components/custom/nav-item';
import Logo from '@/components/custom/logo';
import { Inbox, Plus } from 'lucide-react';

export default function Navigation() {
	return (
		<nav className="flex justify-between items-center border-b px-8 h-14">
			<div className="flex items-center gap-6 md:gap-10">
				{/* hamburger menu  */}

				<Logo />

				<ul className="hidden md:flex md:items-center gap-6 text-sm">
					<NavItem href="/dashboard">Dashboard</NavItem>
					<NavItem href="/offers">Offers</NavItem>
					<NavItem href="/bookmarks">Bookmarks</NavItem>
					<NavItem href="/pricing">Pricing</NavItem>
				</ul>
			</div>

			<ul className="flex items-center gap-3">
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

				{/* dropdown with users profile picture */}
			</ul>
		</nav>
	);
}
