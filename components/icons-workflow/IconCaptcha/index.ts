import dynamic from 'next/dynamic';

import { IconCaptcha } from '@spectrum-web-components/icons-workflow/src/elements/IconCaptcha.js';

export const SpIconCaptcha = dynamic<IconCaptcha | { slot: string }>(
  () => import('./IconCaptcha').then((m) => m.SpIconCaptcha as any),
  { ssr: false }
);
