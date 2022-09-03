import dynamic from 'next/dynamic';

import { IconTrap } from '@spectrum-web-components/icons-workflow/src/elements/IconTrap.js';

export const SpIconTrap = dynamic<Partial<IconTrap> | { slot: string }>(
  () => import('./IconTrap').then((m) => m.SpIconTrap as any),
  { ssr: false}
);
