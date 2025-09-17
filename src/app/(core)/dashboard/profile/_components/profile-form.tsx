'use client';

import { useActionState } from 'react';
import { useProfileForm } from '@/store/profile-form';
import { saveProfileChanges } from '../_actions/save-profile-changes';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ImageUploader from '../_components/image-uploader';

export default function ProfileForm() {
  const profileData = useProfileForm();

  const [, formAction, isPending] = useActionState(
    async () => await saveProfileChanges(profileData),
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <section className="flex flex-col gap-3">
        <h2 className="text-muted-foreground tracking-tight font-medium">Profile Picture</h2>
        <div className="flex items-center gap-5">
          <ImageUploader />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Label className="tracking-tight text-muted-foreground text-sm">Username</Label>
          <Input
            value={profileData.username}
            onChange={e => profileData.setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
      </section>

      <div className="self-end">
        <Button type="submit" disabled={isPending} variant="outline">
          {isPending ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}
