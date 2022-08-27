import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ActionMenu } from '@spectrum-web-components/action-menu';

const ssr = false;

export const SpActionMenu = dynamic<ActionMenu | { children?: ReactNode }>(() => import('./ActionMenu').then(m => m.SpActionMenu as any), { ssr });

