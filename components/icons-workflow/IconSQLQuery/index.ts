import dynamic from 'next/dynamic';

import { IconSQLQuery } from '@spectrum-web-components/icons-workflow/src/elements/IconSQLQuery.js';

export const SpIconSQLQuery = dynamic<IconSQLQuery | { slot: string }>(
  () => import('./IconSQLQuery').then((m) => m.SpIconSQLQuery as any),
  { ssr: false }
);
