import dynamic from 'next/dynamic';

import { IconPrint } from '@spectrum-web-components/icons-workflow/src/elements/IconPrint.js';

export const SpIconPrint = dynamic<Partial<IconPrint> | { slot: string }>(
  () => import('./IconPrint').then((m) => m.SpIconPrint as any),
  { ssr: false }
);
