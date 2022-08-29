import dynamic from 'next/dynamic';

import { IconRelevance } from '@spectrum-web-components/icons-workflow/src/elements/IconRelevance.js';

export const SpIconRelevance = dynamic<IconRelevance | { slot: string }>(
  () => import('./IconRelevance').then((m) => m.SpIconRelevance as any),
  { ssr: false}
);
