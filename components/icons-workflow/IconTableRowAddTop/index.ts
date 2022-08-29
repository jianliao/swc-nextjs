import dynamic from 'next/dynamic';

import { IconTableRowAddTop } from '@spectrum-web-components/icons-workflow/src/elements/IconTableRowAddTop.js';

export const SpIconTableRowAddTop = dynamic<IconTableRowAddTop | { slot: string }>(
  () => import('./IconTableRowAddTop').then((m) => m.SpIconTableRowAddTop as any),
  { ssr: false}
);
