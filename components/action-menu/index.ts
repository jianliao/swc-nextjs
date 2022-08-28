import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ActionMenu } from '@spectrum-web-components/action-menu';

const ssr = false;

export const SpActionMenu = dynamic<
  | ActionMenu
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
>(() => import('./ActionMenu').then((m) => m.SpActionMenu as any), { ssr });
