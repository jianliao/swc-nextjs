import dynamic from 'next/dynamic';

import { IconRewindCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconRewindCircle.js';

export const SpIconRewindCircle = dynamic<Partial<IconRewindCircle> | { slot: string }>(
  () => import('./IconRewindCircle').then((m) => m.SpIconRewindCircle as any),
  { ssr: false }
);
