import { Button } from '@/components/ui/button';
import NavItem from '@/components/custom/nav-item';
import { Inbox, Plus } from 'lucide-react';

export default function Navigation() {
	return (
		<nav>
			<div>
				{/* hamburger menu  */}
				<h1>MakeITWork</h1>

				<ul>
					<NavItem href="/dashboard">Dashboard</NavItem>
					<NavItem href="/offers">Offers</NavItem>
					<NavItem href="/bookmarks">Bookmarks</NavItem>
					<NavItem href="/pricing">Pricing</NavItem>
				</ul>
			</div>

			<ul>
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
