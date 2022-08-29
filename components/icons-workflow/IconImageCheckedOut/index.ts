import dynamic from 'next/dynamic';

import { IconImageCheckedOut } from '@spectrum-web-components/icons-workflow/src/elements/IconImageCheckedOut.js';

export const SpIconImageCheckedOut = dynamic<IconImageCheckedOut | { slot: string }>(
  () => import('./IconImageCheckedOut').then((m) => m.SpIconImageCheckedOut as any),
  { ssr: false}
);
