import dynamic from 'next/dynamic';

import { IconTrimPath } from '@spectrum-web-components/icons-workflow/src/elements/IconTrimPath.js';

export const SpIconTrimPath = dynamic<IconTrimPath | { slot: string }>(
  () => import('./IconTrimPath').then((m) => m.SpIconTrimPath as any),
  { ssr: false}
);
