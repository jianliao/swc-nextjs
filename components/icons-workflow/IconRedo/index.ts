import dynamic from 'next/dynamic';

import { IconRedo } from '@spectrum-web-components/icons-workflow/src/elements/IconRedo.js';

export const SpIconRedo = dynamic<Partial<IconRedo> | { slot: string }>(
  () => import('./IconRedo').then((m) => m.SpIconRedo as any),
  { ssr: false}
);
