import dynamic from 'next/dynamic';

import { IconDataBook } from '@spectrum-web-components/icons-workflow/src/elements/IconDataBook.js';

export const SpIconDataBook = dynamic<Partial<IconDataBook> | { slot: string }>(
  () => import('./IconDataBook').then((m) => m.SpIconDataBook as any),
  { ssr: false}
);
