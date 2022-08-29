import dynamic from 'next/dynamic';

import { IconShield } from '@spectrum-web-components/icons-workflow/src/elements/IconShield.js';

export const SpIconShield = dynamic<IconShield | { slot: string }>(
  () => import('./IconShield').then((m) => m.SpIconShield as any),
  { ssr: false}
);
