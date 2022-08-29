import dynamic from 'next/dynamic';

import { IconTableColumnAddRight } from '@spectrum-web-components/icons-workflow/src/elements/IconTableColumnAddRight.js';

export const SpIconTableColumnAddRight = dynamic<IconTableColumnAddRight | { slot: string }>(
  () => import('./IconTableColumnAddRight').then((m) => m.SpIconTableColumnAddRight as any),
  { ssr: false }
);
