'use client';

import { useState, useRef, useEffect } from 'react';
import { useProfileForm } from '@/store/profile-form';

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

export default function SkillDialog() {
  const { setProfile } = useProfileForm();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [skill, setSkill] = useState<string>('');

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSaveSkill = () => {
    setIsDialogOpen(false);
    setSkill('');
    setProfile(prevProfile => ({
      ...prevProfile,
      skills: prevProfile.skills ? [...prevProfile.skills, skill] : [skill]
    }));
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button type="button" className="size-8 aspect-square cursor-pointer" variant="secondary">
          <PlusIcon className="size-4 text-muted-foreground" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="text-start">Add your skill</DialogTitle>
        <Input onKeyDown={e => {if (e.key === 'Enter') buttonRef.current?.click();}} value={skill} onChange={e => setSkill(e.target.value)} placeholder="e.g. Docker" />
        <Button ref={buttonRef} onClick={handleSaveSkill}>Save</Button>
      </DialogContent>
    </Dialog>
  );
}
