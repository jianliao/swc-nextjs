import dynamic from 'next/dynamic';

import { IconRailRightClose } from '@spectrum-web-components/icons-workflow/src/elements/IconRailRightClose.js';

export const SpIconRailRightClose = dynamic<Partial<IconRailRightClose> | { slot: string }>(
  () => import('./IconRailRightClose').then((m) => m.SpIconRailRightClose as any),
  { ssr: false }
);
