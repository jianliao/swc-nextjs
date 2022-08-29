import dynamic from 'next/dynamic';

import { IconGroup } from '@spectrum-web-components/icons-workflow/src/elements/IconGroup.js';

export const SpIconGroup = dynamic<IconGroup | { slot: string }>(
  () => import('./IconGroup').then((m) => m.SpIconGroup as any),
  { ssr: false }
);
