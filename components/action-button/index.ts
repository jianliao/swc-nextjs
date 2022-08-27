import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ActionButton } from '@spectrum-web-components/action-button';

const ssr = false;

export const SpActionButton = dynamic<ActionButton | { children?: ReactNode }>(() => import('./ActionButton').then(m => m.SpActionButton as any), { ssr });

