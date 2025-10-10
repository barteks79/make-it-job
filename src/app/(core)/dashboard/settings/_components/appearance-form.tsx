'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { AppearanceFormSkeleton } from './skeletons';
import { Card } from '@/components/ui/card';
import { Sun, Moon, SunMoon } from 'lucide-react';
import { cn } from '@/lib/utils';

const themes = [
  {
    name: 'light',
    label: 'Light',
    icon: <Sun strokeWidth={1.5} className="size-6" />
  },
  {
    name: 'dark',
    label: 'Dark',
    icon: <Moon strokeWidth={1.5} className="size-6" />
  },
  {
    name: 'system',
    label: 'System',
    icon: <SunMoon strokeWidth={1.5} className="size-6" />
  }
] as const;

export function AppearanceForm() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <AppearanceFormSkeleton />;
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {themes.map(t => (
        <article key={t.name} className="flex-1 flex flex-col items-center gap-2">
          <Card
            onClick={() => setTheme(t.name)}
            className={cn(
              'flex size-full items-center justify-center py-10 cursor-auto hover:bg-accent/50',
              {
                'text-primary border-primary': theme === t.name
              }
            )}
          >
            {t.icon}
          </Card>

          <span className={cn('text-muted-foreground', { 'text-primary': theme === t.name })}>
            {t.label}
          </span>
        </article>
      ))}
    </div>
  );
}
