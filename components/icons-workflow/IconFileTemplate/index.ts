import dynamic from 'next/dynamic';

import { IconFileTemplate } from '@spectrum-web-components/icons-workflow/src/elements/IconFileTemplate.js';

export const SpIconFileTemplate = dynamic<IconFileTemplate | { slot: string }>(
  () => import('./IconFileTemplate').then((m) => m.SpIconFileTemplate as any),
  { ssr: false }
);
