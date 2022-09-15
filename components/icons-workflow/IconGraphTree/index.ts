import dynamic from 'next/dynamic';

import { IconGraphTree } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphTree.js';

export const SpIconGraphTree = dynamic<Partial<IconGraphTree> | { slot: string }>(
  () => import('./IconGraphTree').then((m) => m.SpIconGraphTree as any),
  { ssr: false }
);
