import dynamic from 'next/dynamic';

import { IconStar } from '@spectrum-web-components/icons-workflow/src/elements/IconStar.js';

export const SpIconStar = dynamic<Partial<IconStar> | { slot: string }>(
  () => import('./IconStar').then((m) => m.SpIconStar as any),
  { ssr: false }
);
