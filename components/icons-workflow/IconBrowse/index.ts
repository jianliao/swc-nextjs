import dynamic from 'next/dynamic';

import { IconBrowse } from '@spectrum-web-components/icons-workflow/src/elements/IconBrowse.js';

export const SpIconBrowse = dynamic<Partial<IconBrowse> | { slot: string }>(
  () => import('./IconBrowse').then((m) => m.SpIconBrowse as any),
  { ssr: false}
);
