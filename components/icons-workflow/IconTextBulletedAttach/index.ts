import dynamic from 'next/dynamic';

import { IconTextBulletedAttach } from '@spectrum-web-components/icons-workflow/src/elements/IconTextBulletedAttach.js';

export const SpIconTextBulletedAttach = dynamic<Partial<IconTextBulletedAttach> | { slot: string }>(
  () => import('./IconTextBulletedAttach').then((m) => m.SpIconTextBulletedAttach as any),
  { ssr: false }
);
