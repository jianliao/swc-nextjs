import dynamic from 'next/dynamic';

import { IconGenderFemale } from '@spectrum-web-components/icons-workflow/src/elements/IconGenderFemale.js';

export const SpIconGenderFemale = dynamic<Partial<IconGenderFemale> | { slot: string }>(
  () => import('./IconGenderFemale').then((m) => m.SpIconGenderFemale as any),
  { ssr: false }
);
