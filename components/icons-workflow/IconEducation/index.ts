import dynamic from 'next/dynamic';

import { IconEducation } from '@spectrum-web-components/icons-workflow/src/elements/IconEducation.js';

export const SpIconEducation = dynamic<IconEducation | { slot: string }>(
  () => import('./IconEducation').then((m) => m.SpIconEducation as any),
  { ssr: false }
);
