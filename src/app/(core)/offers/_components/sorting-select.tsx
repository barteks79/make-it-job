'use client';

import { useState } from 'react';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectTrigger
} from '@/components/ui/select';

export default function SortingSelect() {
	const [value, setValue] = useState('relevance');

	return (
		<Select value={value} onValueChange={setValue}>
			<SelectTrigger>
				<SelectValue>
					<p className="text-sm text-muted-foreground">
						Sort by:
						<span className="ml-2 text-foreground font-medium">
							{value.at(0)?.toUpperCase() + value.slice(1)}
						</span>
					</p>
				</SelectValue>
			</SelectTrigger>

			<SelectContent>
				<SelectItem value="latest">Latest</SelectItem>
				<SelectItem value="relevance">Relevance</SelectItem>
				<SelectItem value="high-low">Salary (high-low)</SelectItem>
				<SelectItem value="low-high">Salary (low-high)</SelectItem>
			</SelectContent>
		</Select>
	);
}
