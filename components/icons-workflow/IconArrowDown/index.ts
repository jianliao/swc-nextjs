import dynamic from 'next/dynamic';

import { IconArrowDown } from '@spectrum-web-components/icons-workflow/src/elements/IconArrowDown.js';

export const SpIconArrowDown = dynamic<Partial<IconArrowDown> | { slot: string }>(
  () => import('./IconArrowDown').then((m) => m.SpIconArrowDown as any),
  { ssr: false}
);
