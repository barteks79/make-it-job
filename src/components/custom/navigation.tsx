import { Button } from '@/components/ui/button';
import NavItem from '@/components/custom/nav-item';
import { Inbox, Plus } from 'lucide-react';

export default function Navigation() {
	return (
		<nav className="flex justify-between items-center border-b px-8 h-16 lg:h-20">
			<div className="flex items-center gap-5 lg:gap-12">
				{/* hamburger menu  */}

				<h1 className="font-flavors text-sm md:text-base lg:text-lg tracking-wider uppercase text-foreground lg:text-secondary-foreground">
					MakeITWork
				</h1>

				<ul className="hidden lg:flex gap-6 text-sm">
					<NavItem href="/dashboard">Dashboard</NavItem>
					<NavItem href="/offers">Offers</NavItem>
					<NavItem href="/bookmarks">Bookmarks</NavItem>
					<NavItem href="/pricing">Pricing</NavItem>
				</ul>
			</div>

			<ul className="flex gap-3">
				<Button variant="outline" size="icon">
					<Plus />
				</Button>

				<Button variant="outline" size="icon">
					<Inbox />
				</Button>

				{/* dropdown with users profile picture */}
			</ul>
		</nav>
	);
}
