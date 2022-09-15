import dynamic from 'next/dynamic';

import { IconHistogram } from '@spectrum-web-components/icons-workflow/src/elements/IconHistogram.js';

export const SpIconHistogram = dynamic<Partial<IconHistogram> | { slot: string }>(
  () => import('./IconHistogram').then((m) => m.SpIconHistogram as any),
  { ssr: false }
);
