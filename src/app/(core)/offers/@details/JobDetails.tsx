import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, DollarSignIcon, MonitorIcon, UserIcon, HouseIcon, Calendar } from 'lucide-react';
import { type JobPost } from '@/types/job-post';
import type { ComponentType, SVGProps } from 'react';

export default function JobDetails({ post }: { post: JobPost }) {
  return (
    <>
      <header className="flex items-center gap-5 py-5 border-b">
        <Avatar className="size-14 rounded">
          <AvatarImage src={post.image} alt={`${post.company} Logo`} />
          <AvatarFallback>{post.company} Logo</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h2 className="tracking-tight font-medium">
            {post.title}, {post.company}
          </h2>
          <p className="text-sm text-accent-foreground">{post.description}</p>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-y-6 place-content-between py-5 px-3 border-b">
        <QuickInfoItem icon={MonitorIcon} label="Job Type" info={post.type} />

        <QuickInfoItem icon={HouseIcon} label="Work Type" info={post.work} />

        <QuickInfoItem
          icon={DollarSignIcon}
          label="Annual Salary"
          info={new Intl.NumberFormat('us-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
          }).format(post.salary)}
        />

        <QuickInfoItem icon={UserIcon} label="Experience" info={post.experience} />

        <QuickInfoItem icon={MapPin} label="Location" info="Toronto, Canada" />

        <QuickInfoItem
          icon={Calendar}
          label="Post date"
          info={`${post.date.getDate()}/${post.date.getMonth()}/${post.date.getFullYear()}`}
        />
      </section>
    </>
  );
}

function QuickInfoItem({
  icon,
  label,
  info
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  info: string;
}) {
  const Icon = icon;

  return (
    <div className="flex items-center gap-2">
      <Icon strokeWidth={1.2} className="size-8 text-secondary-foreground" />
      <div className="flex flex-col">
        <label className="text-sm text-accent-foreground">{label}</label>
        <p className="tracking-tight -mt-1 font-medium">{info}</p>
      </div>
    </div>
  );
}
