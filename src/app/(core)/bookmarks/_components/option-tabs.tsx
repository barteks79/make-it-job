'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Option = 'recent' | 'latest';

export default function OptionTabs() {
  const [option, setOption] = useOptimisticFilter<Option>('option', 'recent');

  return (
    <Tabs className="flex-1" value={option} onValueChange={value => setOption(value as Option)}>
      <TabsList className="w-full">
        <TabsTrigger className="cursor-pointer" value="recent">
          Recently added
        </TabsTrigger>

        <TabsTrigger className="cursor-pointer" value="latest">
          Posted lately
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
