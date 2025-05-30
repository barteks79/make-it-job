import { type PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import { BookmarkIcon, DollarSignIcon, MonitorIcon } from 'lucide-react';
import { Badge }

import {
	Avatar,
	AvatarImage,
	AvatarFallback
} from '@/components/ui/avatar';

import { UserIcon } from 'lucide-react';

import {
	Card,
	CardContent,
	CardAction,
	CardTitle,
	CardDescription,
	CardHeader
} from '@/components/ui/card';

export default function JobPostCard() {
	return (
		<Card className="py-4 gap-4">
			<CardHeader className="flex flex-col gap-2">
				<div className="flex justify-between items-center w-full">
					<p className="text-sm text-muted-foreground">3 days ago</p>

					<Button
						variant="outline"
						size="icon"
						className="size-7 text-muted-foreground"
					>
						<BookmarkIcon />
					</Button>
				</div>

				<figure className="flex items-center gap-3 border-b w-full pb-4">
					<Avatar className="size-9 rounded-md">
						<AvatarImage src="/netflix-logo.jpg" alt="Netflix logo" />
						<AvatarFallback>Netflix Logo</AvatarFallback>
					</Avatar>

					<figcaption className="flex flex-col justify-between">
						<CardTitle>Frontend Developer</CardTitle>
						<CardDescription>Netflix</CardDescription>
					</figcaption>
				</figure>
			</CardHeader>

			<CardContent className="flex flex-col gap-4">
				<ul className="flex justify-between items-center">
					<li className="flex items-center gap-2">
						<UserIcon className="size-4 text-secondary-foreground" />
						<p className="text-sm">Senior</p>
					</li>

					<li className="flex items-center gap-1">
						<DollarSignIcon className="size-4 text-secondary-foreground" />
						<p className="text-sm">120.000</p>
					</li>

					<li className="flex items-center gap-1">
						<MonitorIcon className="size-4 text-secondary-foreground" />
						<p className="text-sm">Full time</p>
					</li>
				</ul>

				<p className="text-muted-foreground text-sm border-b pb-4">
					Build stunning, interactive interfaces that redefine the
					streaming experience for millions.
				</p>
			</CardContent>
		</Card>
	);
}
