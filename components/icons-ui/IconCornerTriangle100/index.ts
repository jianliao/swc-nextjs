import dynamic from 'next/dynamic';

import { IconCornerTriangle100 } from '@spectrum-web-components/icons-ui/src/elements/IconCornerTriangle100.js';

export const SpIconCornerTriangle100 = dynamic<IconCornerTriangle100 | { slot: string }>(
  () => import('./IconCornerTriangle100').then((m) => m.SpIconCornerTriangle100 as any),
  { ssr: false}
);
