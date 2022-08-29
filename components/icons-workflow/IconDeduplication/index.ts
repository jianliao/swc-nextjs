import dynamic from 'next/dynamic';

import { IconDeduplication } from '@spectrum-web-components/icons-workflow/src/elements/IconDeduplication.js';

export const SpIconDeduplication = dynamic<IconDeduplication | { slot: string }>(
  () => import('./IconDeduplication').then((m) => m.SpIconDeduplication as any),
  { ssr: false }
);
