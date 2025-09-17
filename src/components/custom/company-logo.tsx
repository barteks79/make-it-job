import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default function CompanyLogo({
  className,
  alt,
  ...props
}: {
  image: string | null | undefined;
  className?: string;
  alt: string;
} & React.ComponentProps<typeof AvatarImage>) {
  return (
    <Avatar className={cn('size-9 rounded-md', className)}>
      <AvatarImage
        className="object-contain object-center"
        src="/images/user-default1.jpg"
        alt={alt}
        {...props}
      />
      <AvatarFallback>
        <AvatarSkeleton />
      </AvatarFallback>
    </Avatar>
  );
}

function AvatarSkeleton() {
  return <div className="animate-pulse bg-accent w-full h-full"></div>;
}
