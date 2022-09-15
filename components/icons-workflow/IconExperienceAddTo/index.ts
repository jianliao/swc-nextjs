import dynamic from 'next/dynamic';

import { IconExperienceAddTo } from '@spectrum-web-components/icons-workflow/src/elements/IconExperienceAddTo.js';

export const SpIconExperienceAddTo = dynamic<Partial<IconExperienceAddTo> | { slot: string }>(
  () => import('./IconExperienceAddTo').then((m) => m.SpIconExperienceAddTo as any),
  { ssr: false }
);
