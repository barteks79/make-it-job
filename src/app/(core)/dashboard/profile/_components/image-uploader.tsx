'use client';

import { useRef } from 'react';
import { useProfileForm } from '@/store/profile-form';

import { Button } from '@/components/ui/button';
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

  const handleDeleteImage = () => {
    setImage(null);
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
      <div onClick={() => inputRef.current?.click()} className="relative size-25 border rounded-md">
        <Image className="object-cover object-center" src={imageSource} alt="Uploaded Image" fill />
      </div>

      <div className="flex flex-col gap-2">
        <Button type="button" onClick={() => inputRef.current?.click()} size="sm">
          Upload Photo
        </Button>

        <Button
          type="button"
          onClick={handleDeleteImage}
          disabled={!image}
          variant="destructive"
          size="sm"
        >
          Delete Photo
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
