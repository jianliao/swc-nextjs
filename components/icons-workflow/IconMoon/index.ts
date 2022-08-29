import dynamic from 'next/dynamic';

import { IconMoon } from '@spectrum-web-components/icons-workflow/src/elements/IconMoon.js';

export const SpIconMoon = dynamic<IconMoon | { slot: string }>(
  () => import('./IconMoon').then((m) => m.SpIconMoon as any),
  { ssr: false}
);
