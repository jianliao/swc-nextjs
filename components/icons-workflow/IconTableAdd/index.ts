import dynamic from 'next/dynamic';

import { IconTableAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconTableAdd.js';

export const SpIconTableAdd = dynamic<IconTableAdd | { slot: string }>(
  () => import('./IconTableAdd').then((m) => m.SpIconTableAdd as any),
  { ssr: false }
);
