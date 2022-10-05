import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as Material from '@mui/material';
import { Box, Paper, Stack, Typography } from '@mui/material';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import theme from 'prism-react-renderer/themes/nightOwl';
import { ShowSuccess } from './component-definitions/show-success';

const scope = { React, createRoot, Material, ShowSuccess };

const code = `/**
 * The following modules are imported into this codeblock:
 * import * as React from 'react';
 * import { createRoot } from 'react-dom/client';
 * import * as Material from '@mui/material';
 * import { ShowSuccess } from demoSourceCode;
 */

class ShowSuccessElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const mountPoint = document.createElement('div');
    shadowRoot.appendChild(mountPoint);

    createRoot(mountPoint).render(<ShowSuccess />);
  }
}

// This demo code block re-renders multiple times, and we cannot register the same custom element multiple times
if (!customElements.get('show-success')) {
  customElements.define('show-success', ShowSuccessElement);
}

render(<show-success />);
`;

export const DemoShowSuccessWebComponent = () => {
  return (
    <Stack spacing={2} my={2} p={2} component={Paper}>
      <LiveProvider theme={theme} code={code} noInline={true} scope={scope}>
        <Box sx={{ my: 2 }}>
          <Typography variant="overline">
            Code
          </Typography>
          <LiveEditor/>
        </Box>
        <Box>
          <Typography variant="overline">
            Output
          </Typography>
          <LiveError />
          <LivePreview />
        </Box>
      </LiveProvider>
    </Stack>
  );
};
