'use client';

import { useState, useEffect, useRef, type ChangeEvent } from 'react';
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
	const { search, location, setSearch, setLocation } = useQuickFilters();
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isFocused) inputRef?.current?.focus();
	}, [isFocused]);

	const isClearButtonEnabled =
		variant === 'search' ? !!search : !!location;

	function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.target.value;

		if (variant === 'search') {
			setSearch(newValue === '' ? undefined : newValue);
		} else {
			setLocation(newValue === '' ? undefined : newValue);
		}
	}

	return (
		<div
			onClick={() => setIsFocused(true)}
			className={cn(
				'flex-1 flex items-center gap-2 px-3 py-1 bg-background border border-input rounded-md cursor-pointer min-w-0',
				{ 'border-input': isFocused }
			)}
		>
			<SearchIcon className="text-muted-foreground h-4" />

			<input
				ref={inputRef}
				value={variant === 'search' ? search ?? '' : location ?? ''}
				placeholder={placeholder}
				onBlur={() => setIsFocused(false)}
				onChange={handleValueChange}
				className="flex-1 h-6.5 text-foreground text-sm outline-none border-input placeholder:text-muted-foreground pointer-events-none min-w-0"
			/>

			<button
				disabled={!isClearButtonEnabled}
				onClick={() => {
					if (variant === 'search') {
						setSearch(undefined);
					} else {
						setLocation(undefined);
					}
				}}
				className="not-disabled:cursor-pointer h-full"
			>
				<TrashIcon className="text-muted-foreground h-4" />
			</button>
		</div>
	);
}
