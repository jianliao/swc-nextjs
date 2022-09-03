import dynamic from 'next/dynamic';

import { IconDeselect } from '@spectrum-web-components/icons-workflow/src/elements/IconDeselect.js';

export const SpIconDeselect = dynamic<Partial<IconDeselect> | { slot: string }>(
  () => import('./IconDeselect').then((m) => m.SpIconDeselect as any),
  { ssr: false}
);
