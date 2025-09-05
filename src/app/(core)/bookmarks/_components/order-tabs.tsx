'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Order = 'recent' | 'latest';

export default function OptionTabs() {
  const [order, setOrder] = useOptimisticFilter<Order>('order', 'recent');

  return (
    <Tabs className="flex-1" value={order} onValueChange={value => setOrder(value as Order)}>
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
