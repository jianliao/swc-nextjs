import dynamic from 'next/dynamic';

import { IconStraightenOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconStraightenOutline.js';

export const SpIconStraightenOutline = dynamic<IconStraightenOutline | { slot: string }>(
  () => import('./IconStraightenOutline').then((m) => m.SpIconStraightenOutline as any),
  { ssr: false }
);
