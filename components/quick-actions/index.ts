import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { QuickActions } from '@spectrum-web-components/quick-actions';

const ssr = false;

export const SpQuickActions = dynamic<QuickActions | { children?: ReactNode }>(() => import('./QuickActions').then(m => m.SpQuickActions as any), { ssr });

