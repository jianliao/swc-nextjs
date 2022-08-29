import dynamic from 'next/dynamic';

import { IconProject } from '@spectrum-web-components/icons-workflow/src/elements/IconProject.js';

export const SpIconProject = dynamic<IconProject | { slot: string }>(
  () => import('./IconProject').then((m) => m.SpIconProject as any),
  { ssr: false }
);
