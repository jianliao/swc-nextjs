import dynamic from 'next/dynamic';

import { IconRename } from '@spectrum-web-components/icons-workflow/src/elements/IconRename.js';

export const SpIconRename = dynamic<IconRename | { slot: string }>(
  () => import('./IconRename').then((m) => m.SpIconRename as any),
  { ssr: false }
);
