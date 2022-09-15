import dynamic from 'next/dynamic';

import { IconTableColumnAddLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconTableColumnAddLeft.js';

export const SpIconTableColumnAddLeft = dynamic<Partial<IconTableColumnAddLeft> | { slot: string }>(
  () => import('./IconTableColumnAddLeft').then((m) => m.SpIconTableColumnAddLeft as any),
  { ssr: false }
);
