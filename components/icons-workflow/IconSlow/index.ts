import dynamic from 'next/dynamic';

import { IconSlow } from '@spectrum-web-components/icons-workflow/src/elements/IconSlow.js';

export const SpIconSlow = dynamic<IconSlow | { slot: string }>(
  () => import('./IconSlow').then((m) => m.SpIconSlow as any),
  { ssr: false}
);
