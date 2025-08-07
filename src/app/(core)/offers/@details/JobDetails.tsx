import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, DollarSignIcon, MonitorIcon, UserIcon, HouseIcon } from 'lucide-react';
import { type JobPost } from '@/types/job-post';

export default function JobDetails({ post }: { post: JobPost }) {
  return (
    <>
      <header className="flex items-center gap-2.5 py-5 border-b">
        <Avatar className="size-12 rounded">
          <AvatarImage src={post.image} alt={`${post.company} Logo`} />
          <AvatarFallback>{post.company} Logo</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h2 className="text-sm font-medium">
            {post.title}, {post.company}
          </h2>
          <p className="text-xs text-accent-foreground">{post.description}</p>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-6 place-content-between p-5 border-b">
        <div className="flex items-center gap-2">
          <MonitorIcon strokeWidth={1.2} className="size-10 text-secondary-foreground" />
          <div className="flex flex-col">
            <label className="text-sm text-accent-foreground">Job Type</label>
            <p className="-mt-1 font-medium">{post.type}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <HouseIcon strokeWidth={1.2} className="size-10 text-secondary-foreground" />
          <div className="flex flex-col">
            <label className="text-sm text-accent-foreground">Work Type</label>
            <p className="-mt-1 font-medium">{post.work}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DollarSignIcon strokeWidth={1.2} className="size-10 text-secondary-foreground" />
          <div className="flex flex-col">
            <label className="text-sm text-accent-foreground">Annual Salary</label>
            <p className="-mt-1 font-medium">
              {new Intl.NumberFormat('us-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
              }).format(post.salary)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <UserIcon strokeWidth={1.2} className="size-10 text-secondary-foreground" />
          <div className="flex flex-col">
            <label className="text-sm text-accent-foreground">Experience</label>
            <p className="-mt-1 font-medium">{post.experience}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MapPin strokeWidth={1.2} className="size-10 text-secondary-foreground" />
          <div className="flex flex-col">
            <label className="text-sm text-accent-foreground">Location</label>
            <p className="-mt-1 font-medium">Toronto, Canada</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MapPin strokeWidth={1.2} className="size-10 text-secondary-foreground" />
          <div className="flex flex-col">
            <label className="text-sm text-accent-foreground">Post date</label>
            <p className="-mt-1 font-medium">
              {post.date.getDate()}/{post.date.getMonth()}/{post.date.getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
