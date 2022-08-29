import dynamic from 'next/dynamic';

import { IconPersonalizationField } from '@spectrum-web-components/icons-workflow/src/elements/IconPersonalizationField.js';

export const SpIconPersonalizationField = dynamic<IconPersonalizationField | { slot: string }>(
  () => import('./IconPersonalizationField').then((m) => m.SpIconPersonalizationField as any),
  { ssr: false}
);
