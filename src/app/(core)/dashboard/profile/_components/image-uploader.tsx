'use client';

import { useRef } from 'react';
import { useProfileForm } from '@/store/profile-form';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CircleUserRoundIcon } from 'lucide-react';
import Image from 'next/image';

export default function ImageUploader() {
  const { image, setImage } = useProfileForm();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  // fallback image by default
  let imageSource = '/images/user-default1.jpg';

  // if other file was selected
  if (image instanceof File) {
    imageSource = URL.createObjectURL(image);
  }

  // provider image case
  if (typeof image === 'string') {
    imageSource = image;
  }

  return (
    <>
      <div className="flex flex-col">
        <Button type="button" variant="outline" className="relative size-25 cursor-pointer">
          {!image ? (
            <CircleUserRoundIcon className="size-7 stroke-[1.2] text-muted-foreground" />
          ) : (
            <Image
              src={imageSource}
              className="object-cover object-center"
              alt="Uploaded Image"
              fill
            />
          )}
        </Button>

        <Button
          onClick={image ? () => setImage(null) : () => inputRef.current?.click()}
          type="button"
          variant="link"
          className={cn('text-destructive brightness-90 underline-offset-2 self-center px-4 py-0', {
            'text-primary': !image
          })}
        >
          {image ? 'Remove' : 'Upload'}
        </Button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        onChange={handleImageChange}
        className="hidden"
      />
    </>
  );
}
