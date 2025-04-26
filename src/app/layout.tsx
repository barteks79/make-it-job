import { type PropsWithChildren } from 'react';
import { LAYOUT_METADATA } from '@/config/metadata';
import './globals.css';

export const metadata = LAYOUT_METADATA.root;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
