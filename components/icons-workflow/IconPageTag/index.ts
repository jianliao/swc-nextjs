import dynamic from 'next/dynamic';

import { IconPageTag } from '@spectrum-web-components/icons-workflow/src/elements/IconPageTag.js';

export const SpIconPageTag = dynamic<IconPageTag | { slot: string }>(
  () => import('./IconPageTag').then((m) => m.SpIconPageTag as any),
  { ssr: false}
);
