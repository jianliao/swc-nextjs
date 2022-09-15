import dynamic from 'next/dynamic';

import { IconCornerTriangle300 } from '@spectrum-web-components/icons-ui/src/elements/IconCornerTriangle300.js';

export const SpIconCornerTriangle300 = dynamic<Partial<IconCornerTriangle300> | { slot: string }>(
  () => import('./IconCornerTriangle300').then((m) => m.SpIconCornerTriangle300 as any),
  { ssr: false }
);
