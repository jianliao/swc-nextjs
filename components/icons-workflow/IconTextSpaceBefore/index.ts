import dynamic from 'next/dynamic';

import { IconTextSpaceBefore } from '@spectrum-web-components/icons-workflow/src/elements/IconTextSpaceBefore.js';

export const SpIconTextSpaceBefore = dynamic<IconTextSpaceBefore | { slot: string }>(
  () => import('./IconTextSpaceBefore').then((m) => m.SpIconTextSpaceBefore as any),
  { ssr: false }
);
