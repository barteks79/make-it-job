import Link from 'next/link';

export default function Logo() {
	return (
		<Link
			href="/"
			className="font-flavors text-lg tracking-wider uppercase text-foreground"
		>
			MakeITJob
		</Link>
	);
}
