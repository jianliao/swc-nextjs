import dynamic from 'next/dynamic';

import { IconBook } from '@spectrum-web-components/icons-workflow/src/elements/IconBook.js';

export const SpIconBook = dynamic<IconBook | { slot: string }>(
  () => import('./IconBook').then((m) => m.SpIconBook as any),
  { ssr: false }
);
