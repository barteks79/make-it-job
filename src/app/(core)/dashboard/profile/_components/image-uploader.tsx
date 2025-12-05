'use client';

import { useEffect, useState } from 'react';
import { useFileUpload, formatBytes, type FileWithPreview } from '@/hooks/use-file-upload';
import { useProfileForm } from '@/store/profile-form';
import { uploadImage } from '../_actions/store-image';

import { User, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardAction } from '@/components/ui/card';
import { Empty, EmptyContent, EmptyDescription, EmptyTitle } from '@/components/ui/empty';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export interface ImageUploadItem extends FileWithPreview {
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  error?: string;
}

export function ImageUploader() {
  const { image, setImage } = useProfileForm();
  const [uploadFile, setUploadFile] = useState<ImageUploadItem | null>(null);

  const [
    { errors },
    {
      removeFile,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      getInputProps
    }
  ] = useFileUpload({
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
    accept: 'image/png,image/jpeg,image/jpg,image/webp',
    multiple: false,
    onFilesChange: files => {
      if (files.length > 0) {
        const file = files[0];
        setUploadFile({
          ...file,
          progress: 0,
          status: 'uploading' as const
        });
      } else {
        setUploadFile(null);
      }
    }
  });

  // Simulate upload progress
  useEffect(() => {
    if (!uploadFile || uploadFile.status !== 'uploading') return;

    const interval = setInterval(() => {
      setUploadFile(prev => {
        if (!prev || prev.status !== 'uploading') return prev;

        const increment = Math.random() * 15 + 5; // Random increment between 5-20%
        const newProgress = Math.min(prev.progress + increment, 100);

        if (newProgress >= 100) {
          // First set progress to 100% and keep status as uploading
          if (prev.progress < 100) {
            return { ...prev, progress: 100 };
          }
          // Then transition to completed state on next interval
          return {
            ...prev,
            progress: 100,
            status: 'completed' as const
          };
        }

        return { ...prev, progress: newProgress };
      });
    }, 300);

    return () => clearInterval(interval);
  }, [uploadFile]);

  // Update profile form when upload completes
  useEffect(() => {
    if (uploadFile?.status === 'completed' && uploadFile.file instanceof File) {
      setImage(uploadFile.file);
    }
  }, [uploadFile, setImage]);

  // Helper function to get progress bar color based on percentage
  const getProgressColor = (progress: number, status: 'uploading' | 'completed' | 'error') => {
    if (status === 'completed') return 'bg-green-500';
    if (status === 'error') return 'bg-destructive';

    // Only show green at 100%, transition from red to orange to yellow
    if (progress < 33) return 'bg-red-500';
    if (progress < 66) return 'bg-orange-500';
    if (progress < 99) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const removeUploadFile = () => {
    if (uploadFile) {
      removeFile(uploadFile.id);
      setUploadFile(null);
    }
    setImage(null);
  };

  const handleSaveImage = async () => {
    await uploadImage(uploadFile!);
  };

  // Handle existing image from profile
  if (image && !uploadFile) {
    let imageSource = '/images/user-default1.jpg';

    if (image instanceof File) {
      imageSource = URL.createObjectURL(image);
    } else if (typeof image === 'string') {
      imageSource = image;
    }

    return (
      <div className="space-y-3 w-full">
        <Card className="p-0 rounded-md shadow-sm border">
          <CardContent className="p-4 space-y-1.5">
            <div className="flex items-start gap-3">
              {/* Avatar Preview */}
              <div className="relative size-10 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={imageSource}
                  className="object-cover object-center"
                  alt="Profile Picture"
                  fill
                  sizes="40px"
                />
              </div>

              {/* File Info */}
              <div className="min-w-0 flex-1 space-y-1 py-0.5">
                <div className="flex items-center justify-between">
                  <p className="truncate text-xs font-medium text-foreground/80">
                    {image instanceof File ? image.name : 'Profile Picture'}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <CheckCircle className="size-3" strokeWidth={2.5} /> Saved
                  </span>
                </div>

                {/* Size Info */}
                <p className="text-xs text-muted-foreground">
                  {image instanceof File ? formatBytes(image.size) : 'Profile image'}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <CardAction className="flex gap-2">
              <Button
                onClick={openFileDialog}
                variant="default"
                className="px-4 h-min py-1 w-min border-none bg-primary/10 hover:bg-primary/15"
              >
                Change
              </Button>

              <Button
                onClick={removeUploadFile}
                type="button"
                variant="destructive"
                className="px-4 h-min py-1 w-min border-none bg-destructive/10 hover:bg-destructive/15"
              >
                Remove
              </Button>
            </CardAction>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!uploadFile) {
    return (
      <Empty
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={openFileDialog}
        className="border h-20 cursor-pointer"
      >
        <input {...getInputProps()} className="sr-only" />
        <EmptyContent className="text-center gap-1">
          <EmptyTitle className="font-normal text-sm text-muted-foreground">
            Drop your profile picture here or{' '}
            <span className="font-medium text-primary">browse files</span>
          </EmptyTitle>
          <EmptyDescription className="mt-1 text-xs text-muted-foreground">
            PNG, JPG, JPEG, WebP (max 5MB)
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <div className="space-y-3 w-full max-w-full">
      <Card className="p-0 rounded-md shadow-sm border">
        <CardContent className="p-4 space-y-1.5">
          <div className="flex items-start gap-3">
            {/* Avatar Preview */}
            <div className="relative size-10 shrink-0 overflow-hidden rounded-lg bg-gray-100">
              {uploadFile.preview && (
                <Image
                  src={uploadFile.preview}
                  className="object-cover object-center"
                  alt="Profile Picture Preview"
                  fill
                  sizes="64px"
                />
              )}
            </div>

            {/* File Info */}
            <div className="min-w-0 flex-1 space-y-1 py-0.5">
              <div className="flex items-center justify-between">
                <p className="truncate text-xs font-medium text-foreground/80">
                  {uploadFile.file.name}
                </p>
                {uploadFile.status === 'completed' ? (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <CheckCircle className="size-3" strokeWidth={2.5} /> Completed
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    {Math.round(uploadFile.progress)}%
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full rounded-full bg-accent">
                <div
                  className={`h-1.5 rounded-md transition-all duration-300 ease-out ${getProgressColor(
                    uploadFile.progress,
                    uploadFile.status
                  )}`}
                  style={{ width: `${uploadFile.progress}%` }}
                />
              </div>

              {/* Size Info */}
              {uploadFile.status === 'completed' ? (
                <p className="text-xs text-muted-foreground">
                  {formatBytes(uploadFile.file.size)} of {formatBytes(uploadFile.file.size)}
                </p>
              ) : (
                <div className="text-xs text-muted-foreground">
                  <span>
                    {formatBytes(Math.round(uploadFile.file.size * (uploadFile.progress / 100)))} of{' '}
                    {formatBytes(uploadFile.file.size)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons for completed state */}
          {uploadFile.status === 'completed' && (
            <CardAction className="flex gap-2">
              <Button
                onClick={handleSaveImage}
                variant="default"
                className="px-4 h-min py-1 w-min border-none bg-primary/10 hover:bg-primary/15"
              >
                Save
              </Button>

              <Button
                onClick={removeUploadFile}
                variant="destructive"
                className="px-4 h-min py-1 w-min border-none bg-destructive/10 hover:bg-destructive/15"
              >
                Remove
              </Button>
            </CardAction>
          )}
        </CardContent>
      </Card>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="text-sm text-destructive">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}
