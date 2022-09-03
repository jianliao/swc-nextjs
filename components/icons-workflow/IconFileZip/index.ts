import dynamic from 'next/dynamic';

import { IconFileZip } from '@spectrum-web-components/icons-workflow/src/elements/IconFileZip.js';

export const SpIconFileZip = dynamic<Partial<IconFileZip> | { slot: string }>(
  () => import('./IconFileZip').then((m) => m.SpIconFileZip as any),
  { ssr: false}
);
