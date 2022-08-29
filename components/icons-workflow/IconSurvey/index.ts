import dynamic from 'next/dynamic';

import { IconSurvey } from '@spectrum-web-components/icons-workflow/src/elements/IconSurvey.js';

export const SpIconSurvey = dynamic<IconSurvey | { slot: string }>(
  () => import('./IconSurvey').then((m) => m.SpIconSurvey as any),
  { ssr: false}
);
