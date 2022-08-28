import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Accordion } from '@spectrum-web-components/accordion';
import { AccordionItem } from '@spectrum-web-components/accordion';

const ssr = false;

export const SpAccordion = dynamic<Accordion | { children?: ReactNode } | { focus: Function }>(
  () => import('./Accordion').then((m) => m.SpAccordion as any),
  { ssr }
);
export const SpAccordionItem = dynamic<
  AccordionItem | { children?: ReactNode } | { spAccordionItemToggle: Function }
>(() => import('./Accordion').then((m) => m.SpAccordionItem as any), { ssr });
