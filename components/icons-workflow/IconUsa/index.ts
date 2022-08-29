import dynamic from 'next/dynamic';

import { IconUsa } from '@spectrum-web-components/icons-workflow/src/elements/IconUsa.js';

export const SpIconUsa = dynamic<IconUsa | { slot: string }>(
  () => import('./IconUsa').then((m) => m.SpIconUsa as any),
  { ssr: false}
);
