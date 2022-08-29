import dynamic from 'next/dynamic';

import { IconUserGroup } from '@spectrum-web-components/icons-workflow/src/elements/IconUserGroup.js';

export const SpIconUserGroup = dynamic<IconUserGroup | { slot: string }>(
  () => import('./IconUserGroup').then((m) => m.SpIconUserGroup as any),
  { ssr: false }
);
