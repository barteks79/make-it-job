import { getImageUrl } from '@/lib/supabase/get-image-url';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default async function CompanyLogo({
  className,
  image,
  providerImage,
  alt
}: {
  className?: string;
  image?: string | null | undefined;
  providerImage?: string | null | undefined;
  alt: string;
}) {
  let imageUrl = '/images/user-default1.jpg';

  if (image) {
    imageUrl = await getImageUrl(image);
  }

  if (providerImage && !image) {
    imageUrl = providerImage;
  }

  return (
    <Avatar className={cn('size-9 rounded-md', className)}>
      <AvatarImage className="object-contain object-center" src={imageUrl} alt={alt} />
      <AvatarFallback>
        <AvatarSkeleton />
      </AvatarFallback>
    </Avatar>
  );
}

function AvatarSkeleton() {
  return <div className="animate-pulse bg-accent w-full h-full"></div>;
}
