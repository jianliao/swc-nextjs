import dynamic from 'next/dynamic';

import { IconMagnify } from '@spectrum-web-components/icons-workflow/src/elements/IconMagnify.js';

export const SpIconMagnify = dynamic<Partial<IconMagnify> | { slot: string }>(
  () => import('./IconMagnify').then((m) => m.SpIconMagnify as any),
  { ssr: false }
);
