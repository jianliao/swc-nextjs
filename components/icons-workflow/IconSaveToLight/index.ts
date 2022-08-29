import dynamic from 'next/dynamic';

import { IconSaveToLight } from '@spectrum-web-components/icons-workflow/src/elements/IconSaveToLight.js';

export const SpIconSaveToLight = dynamic<IconSaveToLight | { slot: string }>(
  () => import('./IconSaveToLight').then((m) => m.SpIconSaveToLight as any),
  { ssr: false}
);
