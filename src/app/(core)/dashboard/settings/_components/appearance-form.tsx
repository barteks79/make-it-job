'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { Card } from '@/components/ui/card';
import { Sun, Moon, SunMoon } from 'lucide-react';
import { cn } from '@/lib/utils';

const themes = [
  {
    name: 'light',
    label: 'Light',
    icon: <Sun className="size-6" />
  },
  {
    name: 'dark',
    label: 'Dark',
    icon: <Moon className="size-6" />
  },
  {
    name: 'system',
    label: 'System',
    icon: <SunMoon className="size-6" />
  }
] as const;

export function AppearanceForm() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {themes.map(t => (
        <article key={t.name} className="flex-1 flex flex-col items-center gap-2">
          <Card
            onClick={() => setTheme(t.name)}
            className={cn(
              'flex size-full cursor-pointer items-center justify-center py-10 border',
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
