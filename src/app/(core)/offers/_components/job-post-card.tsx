import { Button } from '@/components/ui/button';
import { BookmarkIcon } from 'lucide-react';
import Image from 'next/image';
import {
	Avatar,
	AvatarImage,
	AvatarFallback
} from '@/components/ui/avatar';

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
		<Card className="py-4">
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
		</Card>
	);
}
