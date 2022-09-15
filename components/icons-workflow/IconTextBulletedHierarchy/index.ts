import dynamic from 'next/dynamic';

import { IconTextBulletedHierarchy } from '@spectrum-web-components/icons-workflow/src/elements/IconTextBulletedHierarchy.js';

export const SpIconTextBulletedHierarchy = dynamic<
  Partial<IconTextBulletedHierarchy> | { slot: string }
>(() => import('./IconTextBulletedHierarchy').then((m) => m.SpIconTextBulletedHierarchy as any), {
  ssr: false,
});
