import dynamic from 'next/dynamic';

import { IconExperienceImport } from '@spectrum-web-components/icons-workflow/src/elements/IconExperienceImport.js';

export const SpIconExperienceImport = dynamic<Partial<IconExperienceImport> | { slot: string }>(
  () => import('./IconExperienceImport').then((m) => m.SpIconExperienceImport as any),
  { ssr: false }
);
