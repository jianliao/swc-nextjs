import dynamic from 'next/dynamic';

import { IconTableRowAddBottom } from '@spectrum-web-components/icons-workflow/src/elements/IconTableRowAddBottom.js';

export const SpIconTableRowAddBottom = dynamic<Partial<IconTableRowAddBottom> | { slot: string }>(
  () => import('./IconTableRowAddBottom').then((m) => m.SpIconTableRowAddBottom as any),
  { ssr: false }
);
