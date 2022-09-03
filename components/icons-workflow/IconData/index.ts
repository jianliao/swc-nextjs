import dynamic from 'next/dynamic';

import { IconData } from '@spectrum-web-components/icons-workflow/src/elements/IconData.js';

export const SpIconData = dynamic<Partial<IconData> | { slot: string }>(
  () => import('./IconData').then((m) => m.SpIconData as any),
  { ssr: false}
);
