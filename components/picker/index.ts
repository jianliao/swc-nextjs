import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Picker } from '@spectrum-web-components/picker';

const ssr = false;

export const SpPicker = dynamic<
  | Partial<Picker>
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
>(() => import('./Picker').then((m) => m.SpPicker as any), { ssr });
