import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, DollarSignIcon, MonitorIcon, UserIcon, HouseIcon, Calendar } from 'lucide-react';
import { type JobPost } from '@/types/job-post';
import type { ReactNode, ComponentType, SVGProps } from 'react';

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

      <section className="grid grid-cols-2 gap-y-4 place-content-between py-5 px-3 border-b">
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

      <section className="flex flex-col gap-1 py-5 border-b">
        <h3 className="text-lg font-medium">About the Company</h3>
        <p className="text-sm text-accent-foreground">
          With over 250 million subscribers in more than 190 countries, Netflix is the world’s
          leading streaming entertainment service, offering a vast library of award-winning TV
          series, films, and documentaries. Driven by innovation and a passion for storytelling, we
          push the boundaries of technology and content to redefine the future of entertainment.
          Join us to create seamless, immersive experiences that captivate audiences worldwide!
        </p>
      </section>

      <section className="flex flex-col gap-1 py-5 border-b">
        <h3 className="text-lg font-medium">About the Job</h3>
        <ul className="flex flex-col gap-1 list-disc pl-4">
          <AboutJobItem>
            Architect and develop high-performance, scalable web applications for millions of users.
          </AboutJobItem>
          <AboutJobItem>Enhance UI/UX for seamless streaming across all devices.</AboutJobItem>
          <AboutJobItem>
            Lead technical decisions and collaborate with cross-functional teams.
          </AboutJobItem>
          <AboutJobItem>
            Ensure performance, security, and accessibility best practices.
          </AboutJobItem>
          <AboutJobItem>Write clean, maintainable code.</AboutJobItem>
          <AboutJobItem>Integrate APIs seamlessly with backend teams.</AboutJobItem>
        </ul>
      </section>

      <section className="flex flex-col gap-1 py-5">
        <h3 className="text-lg font-medium">Requirements</h3>
        <ul className="flex flex-col gap-1 list-disc pl-4">
          <AboutJobItem>5+ years of experience in frontend development.</AboutJobItem>

          <AboutJobItem>
            Expertise in React, TypeScript, JavaScript, and modern web frameworks.
          </AboutJobItem>

          <AboutJobItem>
            Strong understanding of performance optimization and responsive design.
          </AboutJobItem>

          <AboutJobItem>Experience with state management libraries (Redux, Zustand).</AboutJobItem>

          <AboutJobItem>
            Excellent communication skills and experience mentoring developers.
          </AboutJobItem>

          <AboutJobItem>
            Strong problem-solving skills and ability to work in a fast-paced environment.
          </AboutJobItem>
        </ul>
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

function AboutJobItem({ children }: { children: ReactNode }) {
  return <li className="text-sm text-accent-foreground">{children}</li>;
}
