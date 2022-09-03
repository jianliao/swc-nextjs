import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Menu } from '@spectrum-web-components/menu';
import { MenuDivider } from '@spectrum-web-components/menu';
import { MenuGroup } from '@spectrum-web-components/menu';
import { MenuItem } from '@spectrum-web-components/menu';

const ssr = false;

export const SpMenu = dynamic<
  | Partial<Menu>
  | { children?: ReactNode }
  | { focus: Function }
  | { handleFocusin: Function }
  | { startListeningToKeyboard: Function }
  | { handleFocusout: Function }
  | { stopListeningToKeyboard: Function }
  | { selectOrToggleItem: Function }
  | { handleKeydown: Function }
  | { focusMenuItemByOffset: Function }
  | { updateSelectedItemIndex: Function }
  | { change: Function }
  | { close: Function }
>(() => import('./Menu').then((m) => m.SpMenu as any), { ssr });
export const SpMenuDivider = dynamic<Partial<MenuDivider> | { children?: ReactNode }>(
  () => import('./Menu').then((m) => m.SpMenuDivider as any),
  { ssr }
);
export const SpMenuGroup = dynamic<
  | Partial<MenuGroup>
  | { children?: ReactNode }
  | { focus: Function }
  | { handleFocusin: Function }
  | { startListeningToKeyboard: Function }
  | { handleFocusout: Function }
  | { stopListeningToKeyboard: Function }
  | { selectOrToggleItem: Function }
  | { handleKeydown: Function }
  | { focusMenuItemByOffset: Function }
  | { updateSelectedItemIndex: Function }
  | { change: Function }
  | { close: Function }
>(() => import('./Menu').then((m) => m.SpMenuGroup as any), { ssr });
export const SpMenuItem = dynamic<
  | Partial<MenuItem>
  | { children?: ReactNode }
  | { click: Function }
  | { openOverlay: Function }
  | { setRole: Function }
  | { triggerUpdate: Function }
  | { spMenuItemAdded: Function }
  | { spMenuItemRemoved: Function }
>(() => import('./Menu').then((m) => m.SpMenuItem as any), { ssr });
