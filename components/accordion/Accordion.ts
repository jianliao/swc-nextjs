import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Accordion } from '@spectrum-web-components/accordion';
import { AccordionItem } from '@spectrum-web-components/accordion';

import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-web-components/accordion/sp-accordion.js';

export const SpAccordion = createComponent({
  react: React,
  tagName: 'sp-accordion',
  elementClass: Accordion,
  events: { focus: 'focus' },
  displayName: 'SpAccordion',
});
export const SpAccordionItem = createComponent({
  react: React,
  tagName: 'sp-accordion-item',
  elementClass: AccordionItem,
  events: { spAccordionItemToggle: 'sp-accordion-item-toggle' },
  displayName: 'SpAccordionItem',
});
