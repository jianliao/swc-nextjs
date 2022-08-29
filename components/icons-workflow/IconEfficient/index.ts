import dynamic from 'next/dynamic';

import { IconEfficient } from '@spectrum-web-components/icons-workflow/src/elements/IconEfficient.js';

export const SpIconEfficient = dynamic<IconEfficient | { slot: string }>(
  () => import('./IconEfficient').then((m) => m.SpIconEfficient as any),
  { ssr: false }
);
