import dynamic from 'next/dynamic';

import { IconExperience } from '@spectrum-web-components/icons-workflow/src/elements/IconExperience.js';

export const SpIconExperience = dynamic<IconExperience | { slot: string }>(
  () => import('./IconExperience').then((m) => m.SpIconExperience as any),
  { ssr: false}
);
