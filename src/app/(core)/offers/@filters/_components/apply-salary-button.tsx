'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useSalaryInputs } from '@/store/salary-inputs';
import { Button } from '@/components/ui/button';

export default function ApplySalaryButton() {
  const { salaryMin, salaryMax } = useSalaryInputs();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const minParam = searchParams.get('salary-min');
    const maxParam = searchParams.get('salary-max');

    const minDiffers = (salaryMin?.toString() ?? '') !== (minParam ?? '');
    const maxDiffers = (salaryMax?.toString() ?? '') !== (maxParam ?? '');

    const minValid = 
			salaryMin === undefined ||
			salaryMax === undefined ||
			salaryMin < salaryMax;

    if ((minDiffers || maxDiffers) && minValid) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [searchParams, salaryMin, salaryMax]);

  const pathname = usePathname();
  const router = useRouter();

  function handleApplySalaryFilters() {
    const params = new URLSearchParams(searchParams.toString());

    if (salaryMin) {
      params.set('salary-min', salaryMin.toString());
    } else {
      params.delete('salary-min');
    }

    if (salaryMax) {
      params.set('salary-max', salaryMax.toString());
    } else {
      params.delete('salary-max');
    }

    router.push(`${pathname}?${params}`);
  }

  return (
    <Button
      disabled={!isEnabled}
      onClick={handleApplySalaryFilters}
      className="w-full not-disabled:cursor-pointer mt-2"
    >
      Apply
    </Button>
  );
}
