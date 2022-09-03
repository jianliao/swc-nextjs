import dynamic from 'next/dynamic';

import { IconShip } from '@spectrum-web-components/icons-workflow/src/elements/IconShip.js';

export const SpIconShip = dynamic<Partial<IconShip> | { slot: string }>(
  () => import('./IconShip').then((m) => m.SpIconShip as any),
  { ssr: false}
);
