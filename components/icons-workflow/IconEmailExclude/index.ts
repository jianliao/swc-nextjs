import dynamic from 'next/dynamic';

import { IconEmailExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailExclude.js';

export const SpIconEmailExclude = dynamic<IconEmailExclude | { slot: string }>(
  () => import('./IconEmailExclude').then((m) => m.SpIconEmailExclude as any),
  { ssr: false }
);
