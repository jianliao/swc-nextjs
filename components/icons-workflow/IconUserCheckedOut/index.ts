import dynamic from 'next/dynamic';

import { IconUserCheckedOut } from '@spectrum-web-components/icons-workflow/src/elements/IconUserCheckedOut.js';

export const SpIconUserCheckedOut = dynamic<IconUserCheckedOut | { slot: string }>(
  () => import('./IconUserCheckedOut').then((m) => m.SpIconUserCheckedOut as any),
  { ssr: false}
);
