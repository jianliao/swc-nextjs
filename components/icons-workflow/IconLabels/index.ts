import dynamic from 'next/dynamic';

import { IconLabels } from '@spectrum-web-components/icons-workflow/src/elements/IconLabels.js';

export const SpIconLabels = dynamic<Partial<IconLabels> | { slot: string }>(
  () => import('./IconLabels').then((m) => m.SpIconLabels as any),
  { ssr: false}
);
