import dynamic from 'next/dynamic';

import { IconSMSLightning } from '@spectrum-web-components/icons-workflow/src/elements/IconSMSLightning.js';

export const SpIconSMSLightning = dynamic<IconSMSLightning | { slot: string }>(
  () => import('./IconSMSLightning').then((m) => m.SpIconSMSLightning as any),
  { ssr: false }
);
