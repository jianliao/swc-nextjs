import dynamic from 'next/dynamic';

import { IconFilterStar } from '@spectrum-web-components/icons-workflow/src/elements/IconFilterStar.js';

export const SpIconFilterStar = dynamic<Partial<IconFilterStar> | { slot: string }>(
  () => import('./IconFilterStar').then((m) => m.SpIconFilterStar as any),
  { ssr: false}
);
