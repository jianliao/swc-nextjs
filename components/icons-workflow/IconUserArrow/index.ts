import dynamic from 'next/dynamic';

import { IconUserArrow } from '@spectrum-web-components/icons-workflow/src/elements/IconUserArrow.js';

export const SpIconUserArrow = dynamic<IconUserArrow | { slot: string }>(
  () => import('./IconUserArrow').then((m) => m.SpIconUserArrow as any),
  { ssr: false }
);
