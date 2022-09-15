import dynamic from 'next/dynamic';

import { IconAssetsLinkedPublished } from '@spectrum-web-components/icons-workflow/src/elements/IconAssetsLinkedPublished.js';

export const SpIconAssetsLinkedPublished = dynamic<
  Partial<IconAssetsLinkedPublished> | { slot: string }
>(() => import('./IconAssetsLinkedPublished').then((m) => m.SpIconAssetsLinkedPublished as any), {
  ssr: false,
});
