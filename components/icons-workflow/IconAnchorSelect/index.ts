import dynamic from 'next/dynamic';

import { IconAnchorSelect } from '@spectrum-web-components/icons-workflow/src/elements/IconAnchorSelect.js';

export const SpIconAnchorSelect = dynamic<Partial<IconAnchorSelect> | { slot: string }>(
  () => import('./IconAnchorSelect').then((m) => m.SpIconAnchorSelect as any),
  { ssr: false}
);
