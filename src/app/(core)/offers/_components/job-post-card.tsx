import { createRelativeDate } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import {
	BookmarkIcon,
	DollarSignIcon,
	MonitorIcon,
	UserIcon
} from 'lucide-react';

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
	CardHeader,
	CardFooter
} from '@/components/ui/card';

import { type JobPost } from '@/types/job-post';

export default function JobPostCard({
	date,
	company,
	description,
	tags,
	title,
	type,
	experience,
	image,
	// isBookmarked,
	salary
}: JobPost) {
	return (
		<Card className="py-4 gap-4 h-full relative">
			<CardHeader className="flex flex-col gap-2">
				<div className="flex justify-between items-center w-full">
					<p className="text-sm text-muted-foreground">
						{createRelativeDate(date)}
					</p>

					<CardAction>
						<Button
							variant="outline"
							size="icon"
							className="size-7 text-muted-foreground"
						>
							<BookmarkIcon />
						</Button>
					</CardAction>
				</div>

				<figure className="flex items-center gap-3 border-b w-full pb-4">
					<Avatar className="size-9 rounded-md">
						<AvatarImage src={image} alt={`${company} Logo`} />
						<AvatarFallback>{company} Logo</AvatarFallback>
					</Avatar>

					<figcaption className="flex flex-col justify-between">
						<CardTitle>{title}</CardTitle>
						<CardDescription>{company}</CardDescription>
					</figcaption>
				</figure>
			</CardHeader>

			<CardContent className="flex flex-col gap-4 flex-1">
				<ul className="flex justify-between items-center">
					<li className="flex items-center gap-2">
						<UserIcon className="size-4 text-secondary-foreground" />
						<p className="text-sm">{experience}</p>
					</li>

					<li className="flex items-center gap-1">
						<DollarSignIcon className="size-4 text-secondary-foreground" />
						<p className="text-sm">{salary}</p>
					</li>

					<li className="flex items-center gap-1">
						<MonitorIcon className="size-4 text-secondary-foreground" />
						<p className="text-sm">{type}</p>
					</li>
				</ul>

				<p className="text-muted-foreground text-sm border-b pb-4">
					{description}
				</p>

				<ul className="flex gap-2 flex-wrap">
					{tags.map((tag, idx) => (
						<JobPostTag key={idx}>{tag}</JobPostTag>
					))}
				</ul>
			</CardContent>

			<CardFooter className="grid grid-cols-2 gap-2">
				<Button variant="outline">Details</Button>
				<Button>Apply</Button>
			</CardFooter>
		</Card>
	);
}

function JobPostTag({ children }: React.PropsWithChildren) {
	return (
		<li>
			<Badge
				variant="outline"
				className="text-secondary-foreground font-normal"
			>
				{children}
			</Badge>
		</li>
	);
}
