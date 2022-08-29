import dynamic from 'next/dynamic';

import { IconMore } from '@spectrum-web-components/icons-workflow/src/elements/IconMore.js';

export const SpIconMore = dynamic<IconMore | { slot: string }>(
  () => import('./IconMore').then((m) => m.SpIconMore as any),
  { ssr: false}
);
