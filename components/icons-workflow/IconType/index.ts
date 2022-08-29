import dynamic from 'next/dynamic';

import { IconType } from '@spectrum-web-components/icons-workflow/src/elements/IconType.js';

export const SpIconType = dynamic<IconType | { slot: string }>(
  () => import('./IconType').then((m) => m.SpIconType as any),
  { ssr: false}
);
