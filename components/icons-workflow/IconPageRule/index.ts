import dynamic from 'next/dynamic';

import { IconPageRule } from '@spectrum-web-components/icons-workflow/src/elements/IconPageRule.js';

export const SpIconPageRule = dynamic<IconPageRule | { slot: string }>(
  () => import('./IconPageRule').then((m) => m.SpIconPageRule as any),
  { ssr: false}
);
