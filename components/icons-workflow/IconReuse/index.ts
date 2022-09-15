import dynamic from 'next/dynamic';

import { IconReuse } from '@spectrum-web-components/icons-workflow/src/elements/IconReuse.js';

export const SpIconReuse = dynamic<Partial<IconReuse> | { slot: string }>(
  () => import('./IconReuse').then((m) => m.SpIconReuse as any),
  { ssr: false }
);
