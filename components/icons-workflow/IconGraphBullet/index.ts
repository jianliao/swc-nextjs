import dynamic from 'next/dynamic';

import { IconGraphBullet } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphBullet.js';

export const SpIconGraphBullet = dynamic<Partial<IconGraphBullet> | { slot: string }>(
  () => import('./IconGraphBullet').then((m) => m.SpIconGraphBullet as any),
  { ssr: false }
);
