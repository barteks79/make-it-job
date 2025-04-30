import { Button } from '@/components/ui/button';
import NavItem from '@/components/custom/nav-item';
import Logo from '@/components/custom/logo';
import { Inbox, Plus } from 'lucide-react';

export default function Navigation() {
	return (
		<nav className="flex justify-between items-center border-b px-8 h-16 lg:h-20">
			<div className="flex items-center gap-5 lg:gap-12">
				{/* hamburger menu  */}

				<Logo />

				<ul className="hidden lg:flex gap-6 text-sm">
					<NavItem href="/dashboard">Dashboard</NavItem>
					<NavItem href="/offers">Offers</NavItem>
					<NavItem href="/bookmarks">Bookmarks</NavItem>
					<NavItem href="/pricing">Pricing</NavItem>
				</ul>
			</div>

			<ul className="flex items-center gap-3">
				<Button
					className="size-7 md:size-8 lg:size-9 transition-none"
					variant="outline"
					size="icon"
				>
					<Plus />
				</Button>

				<Button
					className="size-8 lg:size-9 hidden md:inline-flex transition-none"
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
