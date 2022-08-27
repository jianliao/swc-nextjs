import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Dialog } from '@spectrum-web-components/dialog';
import { DialogWrapper } from '@spectrum-web-components/dialog';

const ssr = false;

export const SpDialog = dynamic<Dialog | { children?: ReactNode }>(
  () => import('./Dialog').then((m) => m.SpDialog as any),
  { ssr }
);
export const SpDialogWrapper = dynamic<
  DialogWrapper | { children?: ReactNode }
>(() => import('./Dialog').then((m) => m.SpDialogWrapper as any), { ssr });
