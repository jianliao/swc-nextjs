import dynamic from 'next/dynamic';

import { IconVideoCheckedOut } from '@spectrum-web-components/icons-workflow/src/elements/IconVideoCheckedOut.js';

export const SpIconVideoCheckedOut = dynamic<Partial<IconVideoCheckedOut> | { slot: string }>(
  () => import('./IconVideoCheckedOut').then((m) => m.SpIconVideoCheckedOut as any),
  { ssr: false }
);
