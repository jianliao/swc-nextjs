import dynamic from 'next/dynamic';

import { IconTableHistogram } from '@spectrum-web-components/icons-workflow/src/elements/IconTableHistogram.js';

export const SpIconTableHistogram = dynamic<IconTableHistogram | { slot: string }>(
  () => import('./IconTableHistogram').then((m) => m.SpIconTableHistogram as any),
  { ssr: false }
);
