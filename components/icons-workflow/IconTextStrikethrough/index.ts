import dynamic from 'next/dynamic';

import { IconTextStrikethrough } from '@spectrum-web-components/icons-workflow/src/elements/IconTextStrikethrough.js';

export const SpIconTextStrikethrough = dynamic<IconTextStrikethrough | { slot: string }>(
  () => import('./IconTextStrikethrough').then((m) => m.SpIconTextStrikethrough as any),
  { ssr: false}
);
