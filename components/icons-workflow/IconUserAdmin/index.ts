import dynamic from 'next/dynamic';

import { IconUserAdmin } from '@spectrum-web-components/icons-workflow/src/elements/IconUserAdmin.js';

export const SpIconUserAdmin = dynamic<IconUserAdmin | { slot: string }>(
  () => import('./IconUserAdmin').then((m) => m.SpIconUserAdmin as any),
  { ssr: false}
);
