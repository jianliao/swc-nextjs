import dynamic from 'next/dynamic';

import { IconMoreSmallListVert } from '@spectrum-web-components/icons-workflow/src/elements/IconMoreSmallListVert.js';

export const SpIconMoreSmallListVert = dynamic<IconMoreSmallListVert | { slot: string }>(
  () => import('./IconMoreSmallListVert').then((m) => m.SpIconMoreSmallListVert as any),
  { ssr: false}
);
