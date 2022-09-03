import dynamic from 'next/dynamic';

import { IconGraphHistogram } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphHistogram.js';

export const SpIconGraphHistogram = dynamic<Partial<IconGraphHistogram> | { slot: string }>(
  () => import('./IconGraphHistogram').then((m) => m.SpIconGraphHistogram as any),
  { ssr: false}
);
