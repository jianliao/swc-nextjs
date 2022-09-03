import dynamic from 'next/dynamic';

import { IconTextRomanLowercase } from '@spectrum-web-components/icons-workflow/src/elements/IconTextRomanLowercase.js';

export const SpIconTextRomanLowercase = dynamic<Partial<IconTextRomanLowercase> | { slot: string }>(
  () => import('./IconTextRomanLowercase').then((m) => m.SpIconTextRomanLowercase as any),
  { ssr: false}
);
