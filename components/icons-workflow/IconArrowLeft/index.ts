import dynamic from 'next/dynamic';

import { IconArrowLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconArrowLeft.js';

export const SpIconArrowLeft = dynamic<Partial<IconArrowLeft> | { slot: string }>(
  () => import('./IconArrowLeft').then((m) => m.SpIconArrowLeft as any),
  { ssr: false}
);
