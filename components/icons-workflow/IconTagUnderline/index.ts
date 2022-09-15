import dynamic from 'next/dynamic';

import { IconTagUnderline } from '@spectrum-web-components/icons-workflow/src/elements/IconTagUnderline.js';

export const SpIconTagUnderline = dynamic<Partial<IconTagUnderline> | { slot: string }>(
  () => import('./IconTagUnderline').then((m) => m.SpIconTagUnderline as any),
  { ssr: false }
);
