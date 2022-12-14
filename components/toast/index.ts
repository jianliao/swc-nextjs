import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Toast } from '@spectrum-web-components/toast';

const ssr = false;

export const SpToast = dynamic<Partial<Toast> | { children?: ReactNode } | { close: Function }>(
  () => import('./Toast').then((m) => m.SpToast as any),
  { ssr }
);
