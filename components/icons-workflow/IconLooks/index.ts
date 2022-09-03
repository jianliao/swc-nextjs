import dynamic from 'next/dynamic';

import { IconLooks } from '@spectrum-web-components/icons-workflow/src/elements/IconLooks.js';

export const SpIconLooks = dynamic<Partial<IconLooks> | { slot: string }>(
  () => import('./IconLooks').then((m) => m.SpIconLooks as any),
  { ssr: false}
);
