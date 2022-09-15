import dynamic from 'next/dynamic';

import { IconCopy } from '@spectrum-web-components/icons-workflow/src/elements/IconCopy.js';

export const SpIconCopy = dynamic<Partial<IconCopy> | { slot: string }>(
  () => import('./IconCopy').then((m) => m.SpIconCopy as any),
  { ssr: false }
);
