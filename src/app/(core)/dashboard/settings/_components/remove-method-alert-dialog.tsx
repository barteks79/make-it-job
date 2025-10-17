'use client';

import { useState } from 'react';
import { useOAuthToggle } from '@/hooks/use-oauth-toggle';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';

export function RemoveMethodAlertDialog({
  children,
  accountId,
  onRemoveComplete
}: { accountId: string; onRemoveComplete: () => void } & React.PropsWithChildren) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    handleToggle: handleRemoveMethod,
    isLoading,
    isEnabled
  } = useOAuthToggle({
    provider: 'credential',
    accountId,
    onError: () => setError('Failed to remove method. Please try again later.'),
    onSuccess: () => {
      setIsAlertOpen(false);
      onRemoveComplete();
    }
  });

  return (
    <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. It will permanently remove your password authentication
            method and you will only be able to sign in using OAuth providers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {error ? (
          <Alert variant="destructive">
            <AlertCircleIcon className="relative top-2" />
            <AlertTitle>Unexpected error occurred.</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : undefined}

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemoveMethod} disabled={!isEnabled || isLoading}>
            {isLoading ? 'Removing...' : 'Remove method'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
