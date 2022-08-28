import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Accordion } from '@spectrum-web-components/accordion';
import { AccordionItem } from '@spectrum-web-components/accordion';

import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-web-components/accordion/sp-accordion.js';

export const SpAccordion = createComponent(
  React,
  'sp-accordion',
  Accordion,
  { focus: 'focus' },
  'SpAccordion'
);
export const SpAccordionItem = createComponent(
  React,
  'sp-accordion-item',
  AccordionItem,
  { spAccordionItemToggle: 'sp-accordion-item-toggle' },
  'SpAccordionItem'
);
