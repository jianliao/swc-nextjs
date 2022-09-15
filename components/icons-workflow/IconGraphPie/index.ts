import dynamic from 'next/dynamic';

import { IconGraphPie } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphPie.js';

export const SpIconGraphPie = dynamic<Partial<IconGraphPie> | { slot: string }>(
  () => import('./IconGraphPie').then((m) => m.SpIconGraphPie as any),
  { ssr: false }
);
