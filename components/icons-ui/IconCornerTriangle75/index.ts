import dynamic from 'next/dynamic';

import { IconCornerTriangle75 } from '@spectrum-web-components/icons-ui/src/elements/IconCornerTriangle75.js';

export const SpIconCornerTriangle75 = dynamic<IconCornerTriangle75 | { slot: string }>(
  () => import('./IconCornerTriangle75').then((m) => m.SpIconCornerTriangle75 as any),
  { ssr: false }
);
