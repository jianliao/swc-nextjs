import dynamic from 'next/dynamic';

import { IconDropdown } from '@spectrum-web-components/icons-workflow/src/elements/IconDropdown.js';

export const SpIconDropdown = dynamic<Partial<IconDropdown> | { slot: string }>(
  () => import('./IconDropdown').then((m) => m.SpIconDropdown as any),
  { ssr: false}
);
