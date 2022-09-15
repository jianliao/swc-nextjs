import dynamic from 'next/dynamic';

import { IconSampler } from '@spectrum-web-components/icons-workflow/src/elements/IconSampler.js';

export const SpIconSampler = dynamic<Partial<IconSampler> | { slot: string }>(
  () => import('./IconSampler').then((m) => m.SpIconSampler as any),
  { ssr: false }
);
