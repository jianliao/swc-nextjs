import dynamic from 'next/dynamic';

import { IconTextStroke } from '@spectrum-web-components/icons-workflow/src/elements/IconTextStroke.js';

export const SpIconTextStroke = dynamic<Partial<IconTextStroke> | { slot: string }>(
  () => import('./IconTextStroke').then((m) => m.SpIconTextStroke as any),
  { ssr: false }
);
