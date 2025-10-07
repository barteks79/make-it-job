'use client';

import { useActionState } from 'react';
import { useProfileForm } from '@/store/profile-form';
import { saveProfileChanges } from '../_actions/save-profile-changes';
import { authClient } from '@/lib/auth/client';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ImageUploader from '../_components/image-uploader';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import SkillDialog from './skill-dialog';

export default function ProfileForm() {
  const profileData = useProfileForm();

  const [, formAction, isPending] = useActionState(
    () => {
      saveProfileChanges(profileData)
      // authClient.refreshToken()
    },
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <section className="flex flex-col gap-3">
        <Label className="text-muted-foreground">Profile Picture</Label>
        <div className="flex items-center gap-5">
          <ImageUploader />
        </div>
      </section>

      <section className="flex flex-col gap-3 col-span-2">
        <Label className="text-muted-foreground">Biography</Label>
        <Textarea
          className="h-full resize-none"
          placeholder="Tell us about yourself"
          value={profileData.profile.biography}
          onChange={e =>
            profileData.setProfile({ ...profileData.profile, biography: e.target.value })
          }
        ></Textarea>
      </section>

      <section className="col-span-2 flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Label className="tracking-tight text-muted-foreground text-sm">Username</Label>
          <Input
            value={profileData.username}
            onChange={e => profileData.setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Label className="tracking-tight text-muted-foreground text-base">Skills</Label>

        <ul className="flex flex-wrap gap-3">
          {profileData.profile.skills?.map(skill => (
            <Tooltip key={skill}>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {
                    profileData.setProfile(prevProfile => {
                      const idx = prevProfile.skills?.indexOf(skill);
                      if (idx === -1 || !idx) return { ...prevProfile };

                      const newSkills = prevProfile.skills!.splice(idx, 1);
                      return { ...prevProfile, skills: [...newSkills] };
                    });
                  }}
                  variant="secondary"
                  className="h-8 px-5"
                  type="button"
                >
                  {skill}
                </Button>
              </TooltipTrigger>

              <TooltipContent>Click to Delete</TooltipContent>
            </Tooltip>
          ))}

          <SkillDialog />
        </ul>
      </section>

      <div className="self-end">
        <Button type="submit" disabled={isPending} variant="outline">
          {isPending ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}
