import dynamic from 'next/dynamic';

import { IconEmailKey } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailKey.js';

export const SpIconEmailKey = dynamic<Partial<IconEmailKey> | { slot: string }>(
  () => import('./IconEmailKey').then((m) => m.SpIconEmailKey as any),
  { ssr: false}
);
