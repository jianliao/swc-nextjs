import dynamic from 'next/dynamic';

import { IconPattern } from '@spectrum-web-components/icons-workflow/src/elements/IconPattern.js';

export const SpIconPattern = dynamic<IconPattern | { slot: string }>(
  () => import('./IconPattern').then((m) => m.SpIconPattern as any),
  { ssr: false}
);
