import dynamic from 'next/dynamic';

import { IconSeparator } from '@spectrum-web-components/icons-workflow/src/elements/IconSeparator.js';

export const SpIconSeparator = dynamic<Partial<IconSeparator> | { slot: string }>(
  () => import('./IconSeparator').then((m) => m.SpIconSeparator as any),
  { ssr: false}
);
