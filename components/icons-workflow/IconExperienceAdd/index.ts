import dynamic from 'next/dynamic';

import { IconExperienceAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconExperienceAdd.js';

export const SpIconExperienceAdd = dynamic<IconExperienceAdd | { slot: string }>(
  () => import('./IconExperienceAdd').then((m) => m.SpIconExperienceAdd as any),
  { ssr: false}
);
