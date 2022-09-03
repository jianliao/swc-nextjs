import dynamic from 'next/dynamic';

import { IconCondition } from '@spectrum-web-components/icons-workflow/src/elements/IconCondition.js';

export const SpIconCondition = dynamic<Partial<IconCondition> | { slot: string }>(
  () => import('./IconCondition').then((m) => m.SpIconCondition as any),
  { ssr: false}
);
