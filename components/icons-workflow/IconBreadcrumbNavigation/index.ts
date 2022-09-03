import dynamic from 'next/dynamic';

import { IconBreadcrumbNavigation } from '@spectrum-web-components/icons-workflow/src/elements/IconBreadcrumbNavigation.js';

export const SpIconBreadcrumbNavigation = dynamic<Partial<IconBreadcrumbNavigation> | { slot: string }>(
  () => import('./IconBreadcrumbNavigation').then((m) => m.SpIconBreadcrumbNavigation as any),
  { ssr: false}
);
