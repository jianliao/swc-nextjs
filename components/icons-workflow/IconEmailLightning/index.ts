import dynamic from 'next/dynamic';

import { IconEmailLightning } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailLightning.js';

export const SpIconEmailLightning = dynamic<Partial<IconEmailLightning> | { slot: string }>(
  () => import('./IconEmailLightning').then((m) => m.SpIconEmailLightning as any),
  { ssr: false}
);
