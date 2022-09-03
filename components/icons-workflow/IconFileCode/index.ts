import dynamic from 'next/dynamic';

import { IconFileCode } from '@spectrum-web-components/icons-workflow/src/elements/IconFileCode.js';

export const SpIconFileCode = dynamic<Partial<IconFileCode> | { slot: string }>(
  () => import('./IconFileCode').then((m) => m.SpIconFileCode as any),
  { ssr: false}
);
