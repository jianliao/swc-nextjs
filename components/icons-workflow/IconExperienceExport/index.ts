import dynamic from 'next/dynamic';

import { IconExperienceExport } from '@spectrum-web-components/icons-workflow/src/elements/IconExperienceExport.js';

export const SpIconExperienceExport = dynamic<Partial<IconExperienceExport> | { slot: string }>(
  () => import('./IconExperienceExport').then((m) => m.SpIconExperienceExport as any),
  { ssr: false}
);
