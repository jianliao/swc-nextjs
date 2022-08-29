import dynamic from 'next/dynamic';

import { IconEditExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconEditExclude.js';

export const SpIconEditExclude = dynamic<IconEditExclude | { slot: string }>(
  () => import('./IconEditExclude').then((m) => m.SpIconEditExclude as any),
  { ssr: false}
);
