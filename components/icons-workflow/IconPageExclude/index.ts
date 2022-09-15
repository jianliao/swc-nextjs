import dynamic from 'next/dynamic';

import { IconPageExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconPageExclude.js';

export const SpIconPageExclude = dynamic<Partial<IconPageExclude> | { slot: string }>(
  () => import('./IconPageExclude').then((m) => m.SpIconPageExclude as any),
  { ssr: false }
);
