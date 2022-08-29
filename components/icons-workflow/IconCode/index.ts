import dynamic from 'next/dynamic';

import { IconCode } from '@spectrum-web-components/icons-workflow/src/elements/IconCode.js';

export const SpIconCode = dynamic<IconCode | { slot: string }>(
  () => import('./IconCode').then((m) => m.SpIconCode as any),
  { ssr: false}
);
