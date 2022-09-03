import dynamic from 'next/dynamic';

import { IconTextSpaceAfter } from '@spectrum-web-components/icons-workflow/src/elements/IconTextSpaceAfter.js';

export const SpIconTextSpaceAfter = dynamic<Partial<IconTextSpaceAfter> | { slot: string }>(
  () => import('./IconTextSpaceAfter').then((m) => m.SpIconTextSpaceAfter as any),
  { ssr: false}
);
