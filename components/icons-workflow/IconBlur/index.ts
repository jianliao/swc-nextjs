import dynamic from 'next/dynamic';

import { IconBlur } from '@spectrum-web-components/icons-workflow/src/elements/IconBlur.js';

export const SpIconBlur = dynamic<Partial<IconBlur> | { slot: string }>(
  () => import('./IconBlur').then((m) => m.SpIconBlur as any),
  { ssr: false }
);
