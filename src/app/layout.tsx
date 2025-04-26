import { ThemeProvider } from '@/store/theme-provider';
import { LAYOUT_METADATA } from '@/config/metadata';
import { type PropsWithChildren } from 'react';
import './globals.css';

export const metadata = LAYOUT_METADATA.root;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
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
