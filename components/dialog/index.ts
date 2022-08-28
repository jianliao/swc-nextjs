import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Dialog } from '@spectrum-web-components/dialog';
import { DialogWrapper } from '@spectrum-web-components/dialog';

const ssr = false;

export const SpDialog = dynamic<Dialog | { children?: ReactNode } | { close: Function }>(
  () => import('./Dialog').then((m) => m.SpDialog as any),
  { ssr }
);
export const SpDialogWrapper = dynamic<
  | DialogWrapper
  | { children?: ReactNode }
  | { focus: Function }
  | { overlayWillCloseCallback: Function }
  | { close: Function }
  | { secondary: Function }
  | { cancel: Function }
  | { confirm: Function }
>(() => import('./Dialog').then((m) => m.SpDialogWrapper as any), { ssr });
