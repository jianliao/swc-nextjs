import dynamic from 'next/dynamic';

import { IconCollection } from '@spectrum-web-components/icons-workflow/src/elements/IconCollection.js';

export const SpIconCollection = dynamic<Partial<IconCollection> | { slot: string }>(
  () => import('./IconCollection').then((m) => m.SpIconCollection as any),
  { ssr: false}
);
