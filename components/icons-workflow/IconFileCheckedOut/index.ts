import dynamic from 'next/dynamic';

import { IconFileCheckedOut } from '@spectrum-web-components/icons-workflow/src/elements/IconFileCheckedOut.js';

export const SpIconFileCheckedOut = dynamic<IconFileCheckedOut | { slot: string }>(
  () => import('./IconFileCheckedOut').then((m) => m.SpIconFileCheckedOut as any),
  { ssr: false}
);
