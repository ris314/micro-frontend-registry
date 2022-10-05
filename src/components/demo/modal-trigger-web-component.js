import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as Emotion from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import * as Material from '@mui/material';
import * as MaterialStyles from '@mui/material/styles';
import { Box, Paper, Stack, Typography } from '@mui/material';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import theme from 'prism-react-renderer/themes/nightOwl';
import { ModalTrigger } from './component-definitions/modal-trigger';

const scope = {
  React,
  createRoot,
  Material,
  MaterialStyles,
  Emotion,
  createEmotionCache,
  ModalTrigger
};

const code = `/**
 * The following modules are imported into this codeblock:
 * import * as React from 'react';
 * import { createRoot } from 'react-dom/client';
 * import * as Material from '@mui/material';
 * import * as MaterialStyles from '@mui/material/styles';
 * import * as Emotion from '@emotion/react'
 * import createEmotionCache from '@emotion/cache';
 * import { ModalTrigger } from demoSourceCode;
 */

class ModalTriggerElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const stylePoint = document.createElement('style');
    shadowRoot.appendChild(stylePoint);

    const mountPoint = document.createElement('div');
    shadowRoot.appendChild(mountPoint);

    const cssCache = createEmotionCache({
      key: 'css',
      prepend: true,
      container: stylePoint
    });

    createRoot(mountPoint).render(
      <MaterialStyles.StyledEngineProvider injectFirst>
          <Emotion.CacheProvider value={cssCache}>
            <ModalTrigger />
          </Emotion.CacheProvider>
      </MaterialStyles.StyledEngineProvider>
    );
  }
}

// This demo code block re-renders multiple times, and we cannot register the same custom element multiple times
if (!customElements.get('modal-trigger')) {
  customElements.define('modal-trigger', ModalTriggerElement);
}

render(<modal-trigger />);
`;

export const DemoModalTriggerWebComponent = () => {
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
