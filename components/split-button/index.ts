import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { SplitButton } from '@spectrum-web-components/split-button';

const ssr = false;

export const SpSplitButton = dynamic<
  | Partial<SplitButton>
  | { children?: ReactNode }
  | { forceFocusVisible: Function }
  | { onButtonBlur: Function }
  | { focus: Function }
  | { onHelperFocus: Function }
  | { onButtonFocus: Function }
  | { handleChange: Function }
  | { setValueFromItem: Function }
  | { toggle: Function }
  | { close: Function }
  | { change: Function }
  | { spOpened: Function }
  | { spClosed: Function }
>(() => import('./SplitButton').then((m) => m.SpSplitButton as any), { ssr });
