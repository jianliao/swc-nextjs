import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Badge } from '@spectrum-web-components/badge';

import '@spectrum-web-components/badge/sp-badge.js';

export const SpBadge = createComponent(React, 'sp-badge', Badge, {}, 'SpBadge');
