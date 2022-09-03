import dynamic from 'next/dynamic';

import { IconTextRomanUppercase } from '@spectrum-web-components/icons-workflow/src/elements/IconTextRomanUppercase.js';

export const SpIconTextRomanUppercase = dynamic<Partial<IconTextRomanUppercase> | { slot: string }>(
  () => import('./IconTextRomanUppercase').then((m) => m.SpIconTextRomanUppercase as any),
  { ssr: false}
);
