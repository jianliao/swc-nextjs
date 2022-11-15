import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Search } from '@spectrum-web-components/search';

import '@spectrum-web-components/search/sp-search.js';

export const SpSearch = createComponent({
  react: React,
  tagName: 'sp-search',
  elementClass: Search,
  events: {
    reset: 'reset',
    submit: 'submit',
    setSelectionRange: 'setSelectionRange',
    select: 'select',
    checkValidity: 'checkValidity',
    change: 'change',
    input: 'input',
  },
  displayName: 'SpSearch',
});
