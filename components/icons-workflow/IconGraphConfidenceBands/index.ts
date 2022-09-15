import dynamic from 'next/dynamic';

import { IconGraphConfidenceBands } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphConfidenceBands.js';

export const SpIconGraphConfidenceBands = dynamic<
  Partial<IconGraphConfidenceBands> | { slot: string }
>(() => import('./IconGraphConfidenceBands').then((m) => m.SpIconGraphConfidenceBands as any), {
  ssr: false,
});
