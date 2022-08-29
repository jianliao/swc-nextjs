import dynamic from 'next/dynamic';

import { IconBriefcase } from '@spectrum-web-components/icons-workflow/src/elements/IconBriefcase.js';

export const SpIconBriefcase = dynamic<IconBriefcase | { slot: string }>(
  () => import('./IconBriefcase').then((m) => m.SpIconBriefcase as any),
  { ssr: false }
);
