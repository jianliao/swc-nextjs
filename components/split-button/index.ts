import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { SplitButton } from '@spectrum-web-components/split-button';

const ssr = false;

export const SpSplitButton = dynamic<
  | SplitButton
  | { children?: ReactNode }
  | { change: Function }
  | { spOpened: Function }
  | { spClosed: Function }
>(() => import('./SplitButton').then((m) => m.SpSplitButton as any), { ssr });
