import Link from 'next/link';

export default function Logo() {
	return (
		<Link
			href="/"
			className="font-flavors text-sm md:text-base lg:text-lg tracking-wider uppercase text-foreground lg:text-secondary-foreground"
		>
			MakeITWork
		</Link>
	);
}
