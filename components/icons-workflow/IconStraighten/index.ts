import dynamic from 'next/dynamic';

import { IconStraighten } from '@spectrum-web-components/icons-workflow/src/elements/IconStraighten.js';

export const SpIconStraighten = dynamic<IconStraighten | { slot: string }>(
  () => import('./IconStraighten').then((m) => m.SpIconStraighten as any),
  { ssr: false}
);
