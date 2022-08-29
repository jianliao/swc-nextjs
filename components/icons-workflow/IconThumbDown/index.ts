import dynamic from 'next/dynamic';

import { IconThumbDown } from '@spectrum-web-components/icons-workflow/src/elements/IconThumbDown.js';

export const SpIconThumbDown = dynamic<IconThumbDown | { slot: string }>(
  () => import('./IconThumbDown').then((m) => m.SpIconThumbDown as any),
  { ssr: false}
);
