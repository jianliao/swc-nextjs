import dynamic from 'next/dynamic';

import { IconFileHTML } from '@spectrum-web-components/icons-workflow/src/elements/IconFileHTML.js';

export const SpIconFileHTML = dynamic<Partial<IconFileHTML> | { slot: string }>(
  () => import('./IconFileHTML').then((m) => m.SpIconFileHTML as any),
  { ssr: false}
);
