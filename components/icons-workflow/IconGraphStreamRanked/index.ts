import dynamic from 'next/dynamic';

import { IconGraphStreamRanked } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphStreamRanked.js';

export const SpIconGraphStreamRanked = dynamic<Partial<IconGraphStreamRanked> | { slot: string }>(
  () => import('./IconGraphStreamRanked').then((m) => m.SpIconGraphStreamRanked as any),
  { ssr: false }
);
