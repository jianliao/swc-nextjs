import dynamic from 'next/dynamic';

import { IconTextBulletedHierarchyExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconTextBulletedHierarchyExclude.js';

export const SpIconTextBulletedHierarchyExclude = dynamic<
  Partial<IconTextBulletedHierarchyExclude> | { slot: string }
>(
  () =>
    import('./IconTextBulletedHierarchyExclude').then(
      (m) => m.SpIconTextBulletedHierarchyExclude as any
    ),
  { ssr: false }
);
