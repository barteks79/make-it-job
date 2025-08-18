import { getImageUrl } from '@/lib/supabase/get-image-url';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default async function CompanyLogo({
  className,
  image,
  name
}: {
  className?: string;
  image: string;
  name: string;
}) {
  const imageUrl = await getImageUrl(image);

  return (
    <Avatar className={cn('size-9 rounded-md', className)}>
      <AvatarImage className="object-contain object-center" src={imageUrl} alt={`${name} Logo`} />
      <AvatarFallback>
        <AvatarSkeleton />
      </AvatarFallback>
    </Avatar>
  );
}

function AvatarSkeleton() {
  return <div className="animate-pulse bg-accent w-full h-full"></div>;
}
