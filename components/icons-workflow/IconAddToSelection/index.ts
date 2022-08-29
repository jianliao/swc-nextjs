import dynamic from 'next/dynamic';

import { IconAddToSelection } from '@spectrum-web-components/icons-workflow/src/elements/IconAddToSelection.js';

export const SpIconAddToSelection = dynamic<IconAddToSelection | { slot: string }>(
  () => import('./IconAddToSelection').then((m) => m.SpIconAddToSelection as any),
  { ssr: false}
);
