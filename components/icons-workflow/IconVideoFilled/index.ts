import dynamic from 'next/dynamic';

import { IconVideoFilled } from '@spectrum-web-components/icons-workflow/src/elements/IconVideoFilled.js';

export const SpIconVideoFilled = dynamic<IconVideoFilled | { slot: string }>(
  () => import('./IconVideoFilled').then((m) => m.SpIconVideoFilled as any),
  { ssr: false }
);
