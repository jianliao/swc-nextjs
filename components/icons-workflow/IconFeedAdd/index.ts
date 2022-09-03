import dynamic from 'next/dynamic';

import { IconFeedAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconFeedAdd.js';

export const SpIconFeedAdd = dynamic<Partial<IconFeedAdd> | { slot: string }>(
  () => import('./IconFeedAdd').then((m) => m.SpIconFeedAdd as any),
  { ssr: false}
);
