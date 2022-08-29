import dynamic from 'next/dynamic';

import { IconLink } from '@spectrum-web-components/icons-workflow/src/elements/IconLink.js';

export const SpIconLink = dynamic<IconLink | { slot: string }>(
  () => import('./IconLink').then((m) => m.SpIconLink as any),
  { ssr: false }
);
