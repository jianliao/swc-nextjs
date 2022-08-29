import dynamic from 'next/dynamic';

import { IconGenderMale } from '@spectrum-web-components/icons-workflow/src/elements/IconGenderMale.js';

export const SpIconGenderMale = dynamic<IconGenderMale | { slot: string }>(
  () => import('./IconGenderMale').then((m) => m.SpIconGenderMale as any),
  { ssr: false }
);
