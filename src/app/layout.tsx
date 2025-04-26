import { ThemeProvider } from '@/store/theme-provider';
import { LAYOUT_METADATA } from '@/config/metadata';

import { GeistSans } from 'geist/font/sans';
import { Flavors } from 'next/font/google';

import { type PropsWithChildren } from 'react';
import './globals.css';

export const metadata = LAYOUT_METADATA.root;

const flavors = Flavors({ weight: '400', variable: '--font-flavors' });

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable} ${flavors.variable}`}
			suppressHydrationWarning
		>
			<body className={`${GeistSans.className}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
