import dynamic from 'next/dynamic';

import { IconLinkCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconLinkCheck.js';

export const SpIconLinkCheck = dynamic<IconLinkCheck | { slot: string }>(
  () => import('./IconLinkCheck').then((m) => m.SpIconLinkCheck as any),
  { ssr: false }
);
