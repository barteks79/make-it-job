'use client';

import { useState, useEffect, useRef } from 'react';
import { useQuickFilters } from '@/store/quick-filters';
import { SearchIcon, TrashIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FilterInput({
	variant,
	placeholder
}: {
	variant: 'search' | 'location';
	placeholder: string;
}) {
	const { search, location } = useQuickFilters();
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isFocused) inputRef?.current?.focus();
	}, [isFocused]);

	const value = variant === 'search' ? search : location;
	const isClearButtonEnabled = value !== '';

	return (
		<div
			onClick={() => setIsFocused(true)}
			className={cn(
				'flex-1 flex items-center gap-2 px-3 py-1 bg-background border border-input rounded-md cursor-pointer',
				{ 'border-input': isFocused }
			)}
		>
			<SearchIcon className="text-muted-foreground h-4" />

			<input
				ref={inputRef}
				placeholder={placeholder}
				onBlur={() => setIsFocused(false)}
				className="flex-1 h-6.5 text-foreground text-sm outline-none border-input placeholder:text-muted-foreground pointer-events-none"
			/>

			<button
				disabled={!isClearButtonEnabled}
				className="not-disabled:cursor-pointer h-full"
			>
				<TrashIcon className="text-muted-foreground h-4" />
			</button>
		</div>
	);
}
