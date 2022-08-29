import dynamic from 'next/dynamic';

import { IconSpin } from '@spectrum-web-components/icons-workflow/src/elements/IconSpin.js';

export const SpIconSpin = dynamic<IconSpin | { slot: string }>(
  () => import('./IconSpin').then((m) => m.SpIconSpin as any),
  { ssr: false}
);
