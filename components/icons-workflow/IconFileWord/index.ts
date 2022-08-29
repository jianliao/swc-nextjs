import dynamic from 'next/dynamic';

import { IconFileWord } from '@spectrum-web-components/icons-workflow/src/elements/IconFileWord.js';

export const SpIconFileWord = dynamic<IconFileWord | { slot: string }>(
  () => import('./IconFileWord').then((m) => m.SpIconFileWord as any),
  { ssr: false }
);
