import dynamic from 'next/dynamic';

import { IconCornerTriangle200 } from '@spectrum-web-components/icons-ui/src/elements/IconCornerTriangle200.js';

export const SpIconCornerTriangle200 = dynamic<Partial<IconCornerTriangle200> | { slot: string }>(
  () => import('./IconCornerTriangle200').then((m) => m.SpIconCornerTriangle200 as any),
  { ssr: false}
);
