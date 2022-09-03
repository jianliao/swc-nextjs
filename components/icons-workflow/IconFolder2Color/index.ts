import dynamic from 'next/dynamic';

import { IconFolder2Color } from '@spectrum-web-components/icons-workflow/src/elements/IconFolder2Color.js';

export const SpIconFolder2Color = dynamic<Partial<IconFolder2Color> | { slot: string }>(
  () => import('./IconFolder2Color').then((m) => m.SpIconFolder2Color as any),
  { ssr: false}
);
