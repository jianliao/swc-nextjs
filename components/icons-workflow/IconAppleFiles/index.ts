import dynamic from 'next/dynamic';

import { IconAppleFiles } from '@spectrum-web-components/icons-workflow/src/elements/IconAppleFiles.js';

export const SpIconAppleFiles = dynamic<IconAppleFiles | { slot: string }>(
  () => import('./IconAppleFiles').then((m) => m.SpIconAppleFiles as any),
  { ssr: false }
);
