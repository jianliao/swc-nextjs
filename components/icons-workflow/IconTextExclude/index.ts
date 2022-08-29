import dynamic from 'next/dynamic';

import { IconTextExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconTextExclude.js';

export const SpIconTextExclude = dynamic<IconTextExclude | { slot: string }>(
  () => import('./IconTextExclude').then((m) => m.SpIconTextExclude as any),
  { ssr: false}
);
