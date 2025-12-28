'use client';

import { useActionState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProfileForm } from '@/store/profile-form';
import { saveProfileChanges } from '@/app/(core)/dashboard/profile/_actions/save-profile-changes';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { ImageUploader } from '@/app/(core)/dashboard/profile/_components/image-uploader';
import { ResumeUploader } from '@/app/(core)/dashboard/profile/_components/resume-uploader';
import { SkillDialog } from '@/app/(core)/dashboard/profile/_components/skill-dialog';

const TOTAL_STEPS = 3;

function getCurrentStep(searchParams: URLSearchParams): number {
  const stepParam = searchParams.get('step');
  const parsed = Number(stepParam ?? '1');

  if (Number.isNaN(parsed) || parsed < 1) return 1;
  if (parsed > TOTAL_STEPS) return TOTAL_STEPS;
  return parsed;
}

export function CompleteProfileForm() {
  const profileData = useProfileForm();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStep = getCurrentStep(searchParams);

  const [, formAction, isPending] = useActionState(async () => {
    await saveProfileChanges(profileData);
    profileData.refetch({ query: { disableCookieCache: true } });
    router.push('/dashboard/profile');
  }, undefined);

  const goToStep = (step: number) => {
    const next = step < 1 ? 1 : step > TOTAL_STEPS ? TOTAL_STEPS : step;

    const params = new URLSearchParams(searchParams.toString());
    params.set('step', String(next));
    router.push(`/complete-profile?${params.toString()}`);
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) goToStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) goToStep(currentStep - 1);
  };

  return (
    <section className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span>Step {currentStep}</span>
          <span className="text-muted-foreground/60">of {TOTAL_STEPS}</span>
        </div>

        <div className="flex gap-1">
          {Array.from({ length: TOTAL_STEPS }, (_, index) => {
            const step = index + 1;

            return (
              <button
                key={step}
                type="button"
                onClick={() => goToStep(step)}
                className={`size-2 rounded-full ${
                  step === currentStep ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to step ${step}`}
              />
            );
          })}
        </div>
      </header>

      <form action={formAction} className="flex flex-col gap-8">
        {currentStep === 1 ? (
          <section className="grid gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">First name</Label>
              <Input
                value={profileData.profile.firstName ?? ''}
                onChange={event =>
                  profileData.setProfile({
                    ...profileData.profile,
                    firstName: event.target.value
                  })
                }
                placeholder="Enter your first name"
                className="text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">Last name</Label>
              <Input
                value={profileData.profile.lastName ?? ''}
                onChange={event =>
                  profileData.setProfile({
                    ...profileData.profile,
                    lastName: event.target.value
                  })
                }
                placeholder="Enter your last name"
                className="text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">Date of birth</Label>
              <Input
                type="date"
                value={profileData.profile.dateOfBirth ?? ''}
                onChange={event =>
                  profileData.setProfile({
                    ...profileData.profile,
                    dateOfBirth: event.target.value
                  })
                }
                className="text-base"
              />
            </div>
          </section>
        ) : undefined}

        {currentStep === 2 ? (
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label className="text-muted-foreground">Biography</Label>
              <Textarea
                className="h-32 resize-none shadow-sm"
                placeholder="Tell us about yourself"
                value={profileData.profile.biography ?? ''}
                onChange={event =>
                  profileData.setProfile({
                    ...profileData.profile,
                    biography: event.target.value
                  })
                }
              />
            </div>

            <section className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <Label className="tracking-tight text-muted-foreground text-sm">Username</Label>
                <Input
                  value={profileData.username}
                  onChange={event => profileData.setUsername(event.target.value)}
                  placeholder="Enter your username"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label className="tracking-tight text-muted-foreground text-base">Skills</Label>

                <ul className="flex flex-wrap gap-3">
                  {profileData.profile.skills?.map(skill => (
                    <li key={skill}>
                      <Button
                        type="button"
                        variant="secondary"
                        className="h-8 px-5"
                        onClick={() => {
                          const index = profileData.profile.skills!.indexOf(skill);
                          profileData.profile.skills?.splice(index, 1);
                          profileData.setProfile({
                            ...profileData.profile,
                            skills: [...profileData.profile.skills!]
                          });
                        }}
                      >
                        {skill}
                      </Button>
                    </li>
                  ))}

                  <SkillDialog />
                </ul>
              </div>
            </section>
          </section>
        ) : undefined}

        {currentStep === 3 ? (
          <section className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Resume</Label>
              <ResumeUploader />
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground">Profile picture</Label>
              <ImageUploader />
            </div>
          </section>
        ) : undefined}

        <footer className="flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            className="cursor-pointer"
            disabled={currentStep === 1}
            onClick={handleBack}
          >
            Back
          </Button>

          {currentStep < TOTAL_STEPS ? (
            <Button type="button" className="cursor-pointer" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit" className="cursor-pointer" disabled={isPending}>
              {isPending ? 'Saving...' : 'Finish profile'}
            </Button>
          )}
        </footer>
      </form>
    </section>
  );
}
